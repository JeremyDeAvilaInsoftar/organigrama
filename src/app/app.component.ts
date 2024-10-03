import {Component, OnInit} from '@angular/core';
import {Enabled, OrgItemConfig, PageFitMode} from "ngx-basic-primitives";
import {HttpClient} from "@angular/common/http";
import {TreeNode} from "primeng/api";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // items: OrgItemConfig[] = [];
  info: TreeNode[] = [];

  constructor(private http: HttpClient) {}
  // data: TreeNode[] = [
  //   {
  //     label: 'F.C Barcelona',
  //     expanded: true,
  //     children: [
  //       {
  //         label: 'Argentina',
  //         expanded: true,
  //         children: [
  //           {
  //             label: 'Argentina'
  //           },
  //           {
  //             label: 'France'
  //           }
  //         ]
  //       },
  //       {
  //         label: 'France',
  //         expanded: true,
  //         children: [
  //           {
  //             label: 'France'
  //           },
  //           {
  //             label: 'Morocco'
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ];
  ngOnInit() {
    this.http.get<TreeNode[]>('assets/data2.json').subscribe(data => {
      this.info = data;
    });

    // this.http.get<any[]>('assets/data.json').subscribe(data => {
    //   // this.data = data.map(item => new OrgItemConfig(item));
    //   // this.items = data.map(item => item.image=this.photos.a);
    // });
  }

  title = 'OrgChart Example';
  // photos = {
  //   a: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA8CAIAAACrV36WAAAAAXNSR0IArs4c6QAAAARn' +
  //     'QU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGnSURBVGhD7dnBbQJBDAVQk1o2QjlQwKYGzpSwKQfq4IxIC' +
  //     'RTB9jLZHCJFwWv7/7EiDt6zmX2yPYMHNq01eb7n5flI36JiIXWpbFW2kAwgsdVblS0kA0hs9db/ZWs+vW/Wno9PxPE3dh' +
  //     'ls6Od+HI1XT1d64Sb8R5utEulwdbA8VY+LZ/kqkfF456pBHxDz5Xxze/p2vsxukBbAshTVOE0PO4B2cUlWKrgUTKsrV0e' +
  //     'ut3RVU/cm5aKKqPXVbjuIDPtDUh2JImq1+jmjkupIFNFStXadHncWXkecpb3393me4oJZnionXyjLV6W4QFZEleHCWNG+' +
  //     '0eKggQJiRVV6vhAXwoqrul0AC1H1uuIsTLUyukYH1jBL7WJ8lgq6oqwkVXSQDrLSVEFXjJWoirlCrFRVyBVhJasirgCr6' +
  //     '5tEv7a5A5jL0tcN7vNl9OVcHqtXRbocVr+Kc9k3H/3qPL69Ise7dh0SsS+2JmtFddgvdy/gGbY7Jdp2GRcyrlu1BfUjxt' +
  //     'iPRm/lqVbGHOMHnU39zQm0I/UbBLA+GVosJHGVrcoWkgEktnoLydYXkF/LiXG21MwAAAAASUVORK5CYII='
  // };
  // PageFitMode = PageFitMode;
  // // Enabled = Enabled;
  //
  // items = [
  //   new OrgItemConfig({
  //     id: 0,
  //     parent: null,
  //     title: 'James Smith',
  //     description: 'VP, Public Sector',
  //     image: this.photos.a,
  //     templateName: 'customTemplate'
  //   }),
  //   new OrgItemConfig({
  //     id: 1,
  //     parent: 0,
  //     title: 'Ted Lucas',
  //     description: 'VP, Human Resources',
  //     image: this.photos.a,
  //     templateName: 'customTemplate'
  //   }),
  //   new OrgItemConfig({
  //     id: 2,
  //     parent: 0,
  //     title: 'Fritz Stuger',
  //     description: 'Business Solutions, US',
  //     image: this.photos.a,
  //     templateName: 'customTemplate'
  //   })
  // ];

  zoomLevel = 1;


  zoomIn() {
    this.zoomLevel = Math.min(this.zoomLevel + 0.1, 2);
  }

  zoomOut() {
    this.zoomLevel = Math.max(this.zoomLevel - 0.1, 0.5);
  }
}
