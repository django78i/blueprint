import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Porfolio } from '../models/portfolio.models';
import { PortfolioService } from '../services/portfolio.service';


@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.scss']
})
export class PortfolioFormComponent implements OnInit {

  portfolioForm: FormGroup;
  checked = false;

  constructor(private formBuilder: FormBuilder, 
    private portfolioService: PortfolioService) { 
   
  }

  ngOnInit(){
    this.initForm();
  }


  initForm() {
    this.portfolioForm = this.formBuilder.group({
      name: [null, Validators.required],
      status: [null, Validators.required],
      favoris: [false, Validators.required]
    })
  }



  onSubmit(){
    const formValue = this.portfolioForm.value;
    const portfolio = new Porfolio();
    portfolio._id='';
    portfolio.name = this.portfolioForm.get('name').value;
    portfolio.status = this.portfolioForm.get('status').value;
    portfolio.favoris = this.portfolioForm.get('favoris').value;
      // this.portfolioService.savePortfolioToServer(portfolio);
  }

}
