import { Component } from "@angular/core"
import { FormBuilder, Validators } from "@angular/forms"
import { Agreement } from "../agreement.model"
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from '../test/test.component';

const formatter = new Intl.NumberFormat("fi-FI", { style: "currency", currency: "EUR" })

@Component({
  selector: "app-index-page",
  templateUrl: "./index-page.component.html",
  styleUrls: ["./index-page.component.scss"]
})
export class IndexPageComponent {
  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
  ) { }

  currentStep = 0
  completed = false
  public modalDetails = false;

  form = this.formBuilder.group({
    investmentAmount: this.formBuilder.group({
      agreement: [null, [Validators.required]],
      additionalInvestment: 50
    }),
    investmentOrigin: this.formBuilder.group({
      salary: false,
      gift: false,
      heritage: false,
      entrepreneurialIncome: false,
      assets: false,
      otherIncome: false,
      investment: false,
      extras: null
    })
  })

  agreements: Record<number, Agreement> = {
    1: new Agreement("Vakuutus 1", 2500),
    2: new Agreement("Vakuutus 2", 1000)
  }

  get selectedAgreement() {
    return this.agreements[this.form.value.investmentAmount.agreement]
  }

  formatNumber(value: number) {
    return formatter.format(value)
  }

  handleStepChange(event: CustomEvent) {
    this.currentStep = event.detail.toStep
  }

  handleNextClick(event: Event) {
    event.preventDefault()
    this.currentStep++
  }

  handleSubmit(event: Event) {
    event.preventDefault()
    this.completed = true
  }

  openModalWithNgb() {
    const popdata = {
      modalActive: true,
    };
    const modalRef = this.modalService.open(
      TestComponent,
      {
        windowClass: 'custom-modal custom-modal-medium',
        backdropClass: 'custom-backdrop',
      },
    );
    modalRef.componentInstance.popupObj = popdata;
    return modalRef.result.then(() => {
      return true;
    });
  }

  simpleModal() {
    const modal = document.querySelector('duet-modal');
    this.modalDetails = true;
  }

  hide() {
    console.log('closing..!')
    this.modalDetails = false;
  }

  test() {
    console.log('button clicked');
     this.modalDetails = false;
  }
}
