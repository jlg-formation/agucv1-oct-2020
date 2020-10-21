import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('Tournevis', [Validators.required]),
    price: new FormControl(1.2, [Validators.required]),
    qty: new FormControl(150, [Validators.required]),
  });
  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  submit(): void {
    console.log('submit');
    this.articleService.add(this.f.value as Article);
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
