import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { YaEvent } from "angular8-yandex-maps";



@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.scss'],
})
export class OrderModalComponent implements OnInit {
  public routePanelParameters = {
    options: {
      showHeader: true,
      title: "Расчёт доставки"
    }
  };

  public zoomControlParameters = {
    options: {
      size: "small",
      float: "none",
      position: {
        bottom: 145,
        right: 10
      }
    }
  };
  distance;
  tariff;
  form_disabled = false;
  showMap = false;
  @Input() info: string;
  
  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  public onRoutePanelReady(event: YaEvent): void {
    const routePanel = event.target.routePanel;

    routePanel.options.set({
      types: { auto: true }
    });

    // Получим ссылку на маршрут.
    routePanel.getRouteAsync().then((route: any) => {
      // Зададим максимально допустимое число маршрутов, возвращаемых мультимаршрутизатором.
      route.model.setParams({ results: 1 }, true);

      // Повесим обработчик на событие построения маршрута.
      route.model.events.add("requestsuccess", () => {
        const activeRoute = route.getActiveRoute();

        if (activeRoute) {
          // Получим протяженность маршрута.
          const length = route.getActiveRoute().properties.get("distance");
          this.distance = length.text;
          // Вычислим стоимость доставки.
          const price = this.calculate(Math.round(length.value / 1000));
          // Создадим макет содержимого балуна маршрута.
          const balloonContentLayout = event.ymaps.templateLayoutFactory
            .createClass(`
              <span>Расстояние: ${length.text}.</span><br/>
              <span style="font-weight: bold; font-style: italic">Стоимость доставки: ${price} р.</span>
            `);

          // Зададим этот макет для содержимого балуна.
          route.options.set("routeBalloonContentLayout", balloonContentLayout);
          // Откроем балун.
          activeRoute.balloon.open();
        }
      });
    });
  }

  public calculate(routeLength): number {
    return +this.tariff * routeLength;
  }
}
