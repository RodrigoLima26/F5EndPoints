import { ENV } from '@app/env';
import { HttpClient } from '@angular/common/http';

export class ActivityService {

    getActivities() {
        return new Promise((resolve, reject) => {
            HttpClient.get(`${ENV.appUrl}ramos-atividade`)
                .subscribe(
                    (data = {data: {}}) => resolve(data),
                           (err) => reject(err)
                );
        })
    }

}
