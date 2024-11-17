import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-information-summary',
  templateUrl: './information-summary.component.html',
  styleUrls: ['./information-summary.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class InformationSummaryComponent implements OnInit {

  user: any = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const document = this.route.snapshot.paramMap.get('document');

    if (document) {
      this.userService.getUserByDocumento(document).subscribe({
        next: (data) => {
          this.user = data;
          this.loading = false;
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }
}
