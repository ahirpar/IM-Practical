import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  GalleryData: any = [];

  constructor() { }

  ngOnInit(): void {
    this.GalleryData = [
      {
        name: "Image 1",
        url: 'https://picsum.photos/id/200/340/210'
      },
      {
        name: "Image 2",
        url: 'https://picsum.photos/id/201/340/210'
      },
      {
        name: "Image 3",
        url: 'https://picsum.photos/id/202/340/210'
      },
      {
        name: "Image 4",
        url: 'https://picsum.photos/id/203/340/210'
      },
      {
        name: "Image 5",
        url: 'https://picsum.photos/id/204/340/210'
      },
      {
        name: "Image 6",
        url: 'https://picsum.photos/id/229/340/210'
      },
      {
        name: "Image 7",
        url: 'https://picsum.photos/id/230/340/210'
      },
      {
        name: "Image 8",
        url: 'https://picsum.photos/id/208/340/210'
      },
      {
        name: "Image 9",
        url: 'https://picsum.photos/id/209/340/210'
      },
      {
        name: "Image 10",
        url: 'https://picsum.photos/id/210/340/210'
      },
      {
        name: "Image 11",
        url: 'https://picsum.photos/id/211/340/210'
      },
      {
        name: "Image 12",
        url: 'https://picsum.photos/id/212/340/210'
      },
      {
        name: "Image 13",
        url: 'https://picsum.photos/id/213/340/210'
      },
      {
        name: "Image 14",
        url: 'https://picsum.photos/id/214/340/210'
      },
      {
        name: "Image 15",
        url: 'https://picsum.photos/id/215/340/210'
      },
      {
        name: "Image 16",
        url: 'https://picsum.photos/id/216/340/210'
      },
      {
        name: "Image 17",
        url: 'https://picsum.photos/id/217/340/210'
      },
      {
        name: "Image 18",
        url: 'https://picsum.photos/id/218/340/210'
      },
      {
        name: "Image 19",
        url: 'https://picsum.photos/id/219/340/210'
      },
      {
        name: "Image 20",
        url: 'https://picsum.photos/id/220/340/210'
      },
      {
        name: "Image 21",
        url: 'https://picsum.photos/id/221/340/210'
      },
      {
        name: "Image 22",
        url: 'https://picsum.photos/id/222/340/210'
      },
      {
        name: "Image 23",
        url: 'https://picsum.photos/id/223/340/210'
      },
      {
        name: "Image 24",
        url: 'https://picsum.photos/id/231/340/210'
      },
      {
        name: "Image 25",
        url: 'https://picsum.photos/id/225/340/210'
      },
      {
        name: "Image 26",
        url: 'https://picsum.photos/id/232/340/210'
      },
      {
        name: "Image 27",
        url: 'https://picsum.photos/id/227/340/210'
      },
      {
        name: "Image 28",
        url: 'https://picsum.photos/id/228/340/210'
      },
      {
        name: "Image 29",
        url: 'https://picsum.photos/id/233/340/210'
      },
      {
        name: "Image 30",
        url: 'https://picsum.photos/id/234/340/210'
      },
      {
        name: "Image 31",
        url: 'https://picsum.photos/id/235/340/210'
      }, {
        name: "Image 32",
        url: 'https://picsum.photos/id/206/340/210'
      }
    ]
  }

}
