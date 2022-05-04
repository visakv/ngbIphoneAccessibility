import { Component, OnInit } from "@angular/core"
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(
    public modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      console.log('IOS Safari Detected!!!!!');
      this.modalService.activeInstances.subscribe((list) => {
        console.log('List::: ', list);
        if (list.length > 0) {
          console.log('Element::: ', document.querySelector('ngb-modal-window').ariaModal);
          if (document.querySelector('ngb-modal-window')) {
            if ((document.querySelector('ngb-modal-window')).getAttribute('role')) {
              console.log('Inside Role.......');
              (document.querySelector('ngb-modal-window')).removeAttribute('role');
            }
            setTimeout(() => {
              if ((document.querySelector('ngb-modal-window')).ariaModal) {
                console.log('Inside aria-modal.......');
                (document.querySelector('ngb-modal-window')).removeAttribute('aria-modal');
                console.log('Element2::: ', document.querySelector('ngb-modal-window'));
                window.scroll(0, 0);
              }
            }, 500);
            console.log('Data removed....');
          }

        }
      });
    }
  }
}
