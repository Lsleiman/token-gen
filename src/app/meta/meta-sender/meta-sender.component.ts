import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';
import metacoin_artifacts from '../../../../build/contracts/Meta.json';

@Component({
  selector: 'app-meta-sender',
  templateUrl: './meta-sender.component.html',
  styleUrls: ['./meta-sender.component.css']
})
export class MetaSenderComponent implements OnInit {
  accounts: string[];
  MetaCoin: any;
  model = {
    symbol: '',
    name: '',
    description: '',
    totalSupply: 0,
    account:''
  };
  status = '';

  constructor(private web3Service: Web3Service) {
    console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {

    this.watchAccount();
    this.web3Service.artifactsToContract(metacoin_artifacts)
      .then((MetaCoinAbstraction) => {
        this.MetaCoin = MetaCoinAbstraction;

      });
  }

  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
      this.model.account = accounts[0];
    });
  }

  setStatus(status) {
    this.status = status;
  }

  async createCoin() {
    if (!this.MetaCoin) {
      this.setStatus('Metacoin is not loaded, unable to create new Token');
      return;
    }

    const totalSupply = this.model.totalSupply;


    this.setStatus('Initiating transaction... (please wait)');
    try {
      const deployedMetaCoin = await this.MetaCoin.deployed();

      const transaction = await deployedMetaCoin.issueCoin(this.model.symbol, this.model.name,this.model.description,this.web3Service.convert(totalSupply),
      {
        from: this.model.account,
        value: this.web3Service.convert('.04')
      });
      console.log(this.model.account);
      if (!transaction) {
        this.setStatus('Failed');
      } else {
        console.log(transaction);
        this.setStatus(`${this.model.symbol} tokens have been deposited into:  ${transaction.receipt.logs[0].address}`);
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error creating token');
    }
  }

  clickAddress(e) {
    this.model.account = e.target.value;
  }

  setTotalSupply(e) {
    this.model.totalSupply = e.target.value;
  }

  setDescription(e) {
    this.model.description = e.target.value;
  }

  setSymbol(e) {
    this.model.symbol = e.target.value;
  }

  setName(e) {
    this.model.name = e.target.value;
  }


}
