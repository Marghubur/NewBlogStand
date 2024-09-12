import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-post',
  standalone: true,
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss',
  imports: [DatePipe]
})
export class ViewPostComponent {
  postDetail: any ={
    ImageUrl: "https://blogger.googleusercontent.com/img/a/AVvXsEi6UR3vAGNU1sfo3acojanl2-3uTHoL86rdqe6Kc_qXoU2BMeKDufl6Wewd-OM1NC48YmgeMY053ytCi9nBEQfvBXFLlwsjaFpnPdIFPpkmmivR1bZpJb5fu1RV9zYAcwIligDiIBkQuAbi7HEQ-KKjxERPNptp3k5p80jDUrSbo087iK5lBg6d5KyO=w640-h360-rw",
    Title: "C# Interview Questions and Answers - Part 01",
    Author: "Tech Point Fundamentals",
    SiteName: "Tech Point Fundamentals",
    Date: new Date(),
    SiteUrl: "https://www.techpointfunda.com/2022/02/csharp-interview-questions-part-01.html"
  }
}
