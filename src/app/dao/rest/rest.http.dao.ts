import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import { AppState } from '../../app.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestUtils {
	private _appState;
	constructor(private http:Http) {
    }

	public get(urlDetails: Object, requestParams: any):Promise<any> {
		let reqOps = this.createRequestOptions(urlDetails, 'GET', requestParams,null);
		let url = this.buildUrl(urlDetails,requestParams);
		return this.http.get(url, reqOps).map(res => res.json()).toPromise();
    }

	public delete(urlDetails: Object, requestParams: any):Promise<any>{
		let reqOps = this.createRequestOptions(urlDetails, 'DELETE', requestParams,null);
		let url = this.buildUrl(urlDetails,requestParams);
		return this.http.delete(url, reqOps).map(res => res.json()).toPromise();
	}

	public put(urlDetails: Object,postdata: any, requestParams: any):Promise<any> {
		let allData = {...requestParams, ...postdata};
		let reqOps = this.createRequestOptions(urlDetails, 'PUT', requestParams,postdata);
		let url = this.buildUrl(urlDetails,allData);
		return this.http.put(url,postdata, reqOps).map(res => res.json()).toPromise();
    }
	
    public post(urlDetails: Object,postdata: any, requestParams: any):Promise<any> {
		let allData = {...requestParams, ...postdata};
		
		let reqOps = this.createRequestOptions(urlDetails, 'POST', requestParams,postdata);
		let url = this.buildUrl(urlDetails,allData);
		
		return this.http.post(url,postdata, reqOps).map(res => res.json()).toPromise();
    }

    public uploadFiles(urlDetails: Object, files: any[], requestParams: any): Promise<any> {
		let url = this.buildUrl(urlDetails,requestParams);
    	let reqOps = this.createRequestOptions(url, 'POST', requestParams,null);
		
        let fd = new FormData();
        files.forEach((file: any) => {
		    fd.append('file', file);
        });
		return this.http.post(url, fd, reqOps).map(res => res.json()).toPromise();
	}
	
	public uploadFile(urlDetails: Object, file: any, requestParams: any): Promise<any> {
		let url = this.buildUrl(urlDetails,requestParams);
    	let reqOps = this.createRequestOptions(url, 'POST', requestParams,null);
		
        let fd = new FormData();
		fd.append('file', file);
		return this.http.post(url, fd, reqOps).map(res => res.json()).toPromise();
    }

    private createRequestOptions(urlDetails: Object, method:string, requestParams: any,data:Object):RequestOptions {
        let requestOptions = new RequestOptions();
	
        	const headers = new Headers();
			requestOptions.headers = headers;

		let user = this._appState.get("user");
		let token = user ? user["x-access-token"] : null;
		if(token){
			headers.append("x-access-token",token);
			// console.log(token+"token");
		}
		this.buildSearchReqParams(urlDetails,requestParams, requestOptions);        
        switch (method) {
        	case "GET": break;
        	case "POST":
        		break;
        	default:break;
        }
        return requestOptions;
    }

    private buildSearchReqParams(urlDetails: Object,requestParams: any, requestOptions: RequestOptions) {
    	let plabels = urlDetails["params"];
        if (plabels && plabels.length) {
        	let params: URLSearchParams = new URLSearchParams();
	        plabels.forEach((plabel: string) => {
	        	let val = requestParams[plabel];
	            if(val) params.set(plabel, val);
	        });
        	requestOptions.search = params;
	    }
	}
	public buildRequestParams(urlDetails:Object, data:Object):Object {
        let requestParams = {};        
        let plabels = urlDetails["params"];
        if(plabels) {
            plabels.map( label => {
				let val = data[label];
				requestParams[label] = val;
            });
        } 
        return requestParams;
	}
	public buildUrl(urlDetails:Object, vals:Object):string {
		let baseUrl = urlDetails["url"];
		//replace $(..) with the values from vals
		let keys = vals ? Object.keys(vals) : null
		if(keys && keys.length > 0) {
			return baseUrl.replace(/:(\w+)/g, (_,k) => vals[k]);
		} else {
			return baseUrl;
		}
	}

	public setAppState(appState:AppState){
		this._appState =appState;
	}
}
