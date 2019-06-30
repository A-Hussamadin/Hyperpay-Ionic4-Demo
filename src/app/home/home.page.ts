import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: [ 'home.page.scss' ]
})
export class HomePage {
	result: Observable<any>;
	constructor(public http: HttpClient) {}
	url = 'http://saib.gate2play.com/hussam/ionicserverside.php';
	checkoutId: String;
	options = {
		headers: new HttpHeaders({
			'content-type': 'application/json'
		})
	};
	ngOnInit() {}

	ionViewDidEnter() {
		console.log('hi');
		let data = {
			method: 'payment',
			amount: '10'
		};

		this.http.post(this.url, data, this.options).subscribe(
			(data) => {
				console.log(data);
				this.checkoutId = data['checkoutId'];
				console.log(this.checkoutId);

				let script = document.createElement('script');
				script.src = 'https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=' + this.checkoutId;
				document.body.appendChild(script);
			},
			(error) => {
				console.log(error);
			}
		);
		//this.result = this.movieServic.requestCheckoutId(data);
	}
}
