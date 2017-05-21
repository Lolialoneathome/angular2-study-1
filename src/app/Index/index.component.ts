import { Component, Input  } from '@angular/core';

@Component({
    styleUrls: ['index.component.css'],
    template: `
    <div class="container">
      <div class="row">
        <div class="col-md-4" style="padding-top:30px">
          <div class="header1">on-line услуги</div>
        </div>
        <div class="col-md-2 border-right text-center">
          <online-service-component [text]="'Поиск автомобиля'" [imagePath]="'assets/images/search-auto-icon.png'">
          </online-service-component>
        </div>
        <div class="col-md-2 border-right text-center">
        <online-service-component [text]="'Оценка автомобиля'" [imagePath]="'assets/images/rating-icon.png'">
        </online-service-component>
        </div>
        <div class="col-md-2 border-right text-center">
        <online-service-component [text]="'Обмен автомобиля'" [imagePath]="'assets/images/swap-auto-icon.png'">
        </online-service-component>
        </div>
        <div class="col-md-2 text-center">
        <online-service-component [text]="'Обратная связь'" [imagePath]="'assets/images/feedback-icon.png'">
        </online-service-component>
        </div>
      </div>
    </div>


    <div class="combined-components gray-back">
      <div class="container">
        <red-line-title [text]="'Комфортный салон автомобилей с пробегом'"></red-line-title>
      </div>
    </div>
    `
})

export class IndexComponent {

}
