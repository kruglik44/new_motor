import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderModalComponent } from './order-modal/order-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(public modalController: ModalController) { }
  data = [{
    photo: '../../../assets/images/storage.jpg',
    header: 'Магазин автозапчастей',
    description: ''
  }, {
    photo: '../../../assets/images/storage.jpg',
    header: 'Магазин автозапчастей',
    description: ''
  }, {
    photo: '../../../assets/images/storage.jpg',
    header: 'Магазин автозапчастей',
    description: ''
  }, {
    photo: '../../../assets/images/storage.jpg',
    header: 'Магазин автозапчастей',
    description: ''
  }];
  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: OrderModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        info: {title: 'Рассчитать перевозку'}
      }
    });
    return await modal.present();
  }
}
