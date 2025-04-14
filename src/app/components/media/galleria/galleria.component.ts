import { Component } from '@angular/core';
import { PhotoService } from '../../../services/photo.service';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrl: './galleria.component.scss'
})
export class GalleriaComponent {
  images!: any[];
  displayCustom!: boolean;
  displayBasic!: boolean;
  displayBasicWithOut!: boolean;
  get activeIndex(): number {
    return this._activeIndex;
  }
  positionOptions = [
    {
      label: 'Bottom',
      value: 'bottom'
    },
    {
      label: 'Top',
      value: 'top'
    },
    {
      label: 'Left',
      value: 'left'
    },
    {
      label: 'Right',
      value: 'right'
    }
  ];
  activeI: number = 0;
  position: "bottom" | "top" | "left" | "right" = 'bottom';
  set activeIndex(newValue) {
    if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
      this._activeIndex = newValue;
    }
  }
  showIndicatorsOnItem: boolean = false;
  _activeIndex: number = 2;
  responsiveOptions!: any[];

  constructor(private photoService: PhotoService) { }
  next() {
    this.activeIndex++;
  }
  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
  prev() {
    this.activeIndex--;
  }
  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }
}