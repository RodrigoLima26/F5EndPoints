import { ENV } from '@app/env';
import { HttpClient } from '@angular/common/http';

export class ActivityService {

    http = HttpClient;

    getActivities() {
        return new Promise((resolve, reject) => {
            this.http.get(`${ENV.appUrl}ramos-atividade`)
                .subscribe(
                    (data = {data: {}}) => resolve(data),
                           (err) => reject(err)
                );
        })
    }

}
