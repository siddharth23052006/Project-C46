class Form{
    constructor(){
        this.title = createElement('h1');
        this.title2 = createElement('h2');
        this.genderTitle = createElement('h3');
        this.email = createInput('Email address');
        this.age = createInput('Age');
        this.gender = createRadio('Gender');
            this.gender.option('Male');
            this.gender.option('Female');
            this.gender.option('Other');
        this.name = createInput('Your Name');
        this.button = createButton('SUBMIT');
    }

    hide(){
        this.email.hide();
        this.age.hide();
        this.gender.hide();
        this.name.hide();
        this.button.hide();
        this.title2.hide();
        this.genderTitle.hide();
    }

    display(){
        this.title.html('Healthcare App');
        this.title.position(width/2-45, 5);
        this.title2.html('Fill the following details to proceed');
        this.title2.position(width/2-120, 70);

        this.name.position(width/2-30,200);
        this.age.position(width/2-30,230);
        this.email.position(width/2-30,260);

        this.gender.position(width/2-30,height/2-20);
        this.genderTitle.html('Your Gender:');
        this.genderTitle.position(width/2-30,height/2-60);

        this.button.position(width-120, height-60);
        this.button.mousePressed(()=>{
            this.hide();
            
            user.name = this.name.value();
            user.email = this.email.value();
            user.age = this.age.value();
            user.gender = this.gender.value();

            user.index++;
            user.update(this.name.value());

            this.organs = createSelect('Select the body part');
                this.organs.option('Select the organ');
                this.organs.option('Brain');
                this.organs.option('Eyes');
                this.organs.option('Ears');
                this.organs.option('Nose and Respiratory problems');
                this.organs.option('Mouth - teeth, gums and other parts');
                this.organs.option('Bones');
                this.organs.option('Muscles');
                this.organs.option('Spine');
            this.organs.position(width/2-40,150);
            this.buttonPage2 = createButton('SUBMIT');
            this.buttonPage2.position(width-120, height-60);
        })

    }
}
