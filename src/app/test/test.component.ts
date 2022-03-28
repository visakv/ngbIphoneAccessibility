import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
})
export class TestComponent implements OnInit {

    modalActive = false;
    @Input() popupObj: any;
    constructor(
        public activeModal: NgbActiveModal,
    ) { }

    ngOnInit(): void {
        this.modalActive = this.popupObj.modalActive;
    }

    hide() {
        console.log('closing..');
        this.modalActive = false;
        this.activeModal.close(true);
    }

    test() {
        console.log('button clicked');
    }

}
