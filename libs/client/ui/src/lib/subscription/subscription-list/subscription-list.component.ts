import { Component, OnInit } from '@angular/core';
import { SubscriptionQuery, SubscriptionService } from '@bff/client/core';

@Component({
  selector: 'bff-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent implements OnInit {

  constructor(private subscriptionQuery: SubscriptionQuery, private subscriptionService: SubscriptionService) { }

  async ngOnInit(): Promise<void> {
    await this.subscriptionService
      .all()
      .toPromise();
  }

  public subscriptions() {
    return this.subscriptionQuery.selectAll();
  }
}
