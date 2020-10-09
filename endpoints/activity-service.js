import { ENV } from '@app/env';

export class ActivityService {

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
