class CreatePostFormController{
    constructor(){
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;
        this.name = '';
        this.topic = '';
    }

    submit(){
        if(!this.name||!this.topic){
            return false;
        }

        this.API.all('posts').post({name:this.name, topic: this.topic}).then(() => {
            this.ToastService.show('Post added successfully');
            this.name='';
            this.topic='';
        })
    }
}

export const CreatePostFormComponent = {
    templateUrl: './views/app/components/create-post-form/create-post-form.component.html',
    controller: CreatePostFormController,
    controllerAs: 'vm',
    bindings: {}
}
