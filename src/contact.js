const contactInfo = () => {
    const navItems = document.querySelectorAll('.navbar__nav-item');

    if(document.querySelector('.info')){
        document.querySelector('.info').remove();
    }

    navItems.forEach(item => {
        item.classList.remove('active');
    })

    document.querySelector('.navbar__nav-item--contact').classList.add('active');

    const navBar = document.querySelector('.navbar');

    const info = document.createElement('div');
    info.classList.add('info');

    const infoPanelAbout = document.createElement('div');
    infoPanelAbout.classList.add('info-panel', 'info-panel--about');


    const infoPanelClose = document.createElement('span');
    infoPanelClose.classList.add('info-panel__close');
    infoPanelClose.append('x');

    const headingPrimary = document.createElement('h1');
    headingPrimary.classList.add('heading-primary', 'heading-primary--contact');
    headingPrimary.append('Contact Us');

    const infoPanelContent = document.createElement('div');
    infoPanelContent.classList.add('info-panel__content', 'info-panel__content--contact');

    const form = document.createElement('form');
    form.classList.add('form');

    const headingSecondary = document.createElement('h2');
    headingSecondary.classList.add('heading-secondary');
    headingSecondary.append('Contact Information');

    const formGroupName1 = document.createElement('div');
    formGroupName1.classList.add('form__group');
        const formLabelName1 = document.createElement('label');
        formLabelName1.classList.add('form__label');
        formLabelName1.setAttribute('for', 'firstName');
        formLabelName1.append('First Name:');
            const formInputName1 = document.createElement('input');
            formInputName1.classList.add('form__input');
            formInputName1.id = "firstName";
            formInputName1.setAttribute('type', 'text');
            formInputName1.setAttribute('name', 'firstName');
            formInputName1.setAttribute('placeholder', 'What\'s your first name?');
            formInputName1.setAttribute('required', '');

    const formGroupName2 = document.createElement('div');
    formGroupName2.classList.add('form__group'); 
        const formLabelName2 = document.createElement('label');
        formLabelName2.classList.add('form__label');
        formLabelName2.setAttribute('for', 'lastName');
        formLabelName2.append('Last Name:');
            const formInputName2 = document.createElement('input');
            formInputName2.classList.add('form__input');
            formInputName2.id = "lastName";
            formInputName2.setAttribute('type', 'text');
            formInputName2.setAttribute('name', 'lastName');
            formInputName2.setAttribute('placeholder', 'What\'s your last name?');
            formInputName2.setAttribute('required', '');

    const formGroupEmail = document.createElement('div');
    formGroupEmail.classList.add('form__group'); 
        const formLabelEmail = document.createElement('label');
        formLabelEmail.classList.add('form__label');
        formLabelEmail.setAttribute('for', 'email');
        formLabelEmail.append('Email:');
            const formInputEmail = document.createElement('input');
            formInputEmail.classList.add('form__input');
            formInputEmail.id = "email";
            formInputEmail.setAttribute('type', 'email');
            formInputEmail.setAttribute('name', 'email');
            formInputEmail.setAttribute('placeholder', 'What\'s your email?');
            formInputEmail.setAttribute('required', '');

    const formGroupPhoneNumber = document.createElement('div');
    formGroupPhoneNumber.classList.add('form__group'); 
        const formLabelPhoneNumber = document.createElement('label');
        formLabelPhoneNumber.classList.add('form__label');
        formLabelPhoneNumber.setAttribute('for', 'phoneNumber');
        formLabelPhoneNumber.append('Phone Number:')
            const formInputPhoneNumber = document.createElement('input');
            formInputPhoneNumber.classList.add('form__input');
            formInputPhoneNumber.id = "phoneNumber";
            formInputPhoneNumber.setAttribute('type', 'tel');
            formInputPhoneNumber.setAttribute('name', 'phoneNumber');
            formInputPhoneNumber.setAttribute('placeholder', 'What\'s your phone number?');
            formInputPhoneNumber.setAttribute('required', '');

    const headingSecondary2 = document.createElement('h2');
    headingSecondary2.classList.add('heading-secondary');
    headingSecondary2.append('Comments')

    const formGroupComments = document.createElement('div');
    formGroupComments.classList.add('form__group');
        const formInputComments = document.createElement('textarea');
        formInputComments.classList.add('form__input');
        formInputComments.id = "comments";
        formInputComments.setAttribute('name', 'comments');
        formInputComments.setAttribute('cols', '30');
        formInputComments.setAttribute('rows', '10');
        formInputComments.setAttribute('placeholder', 'Have a suggestion?');
        formInputComments.setAttribute('required', '');
            const formLabelComments = document.createElement('label');
            formLabelComments.classList.add('form__label');
            formLabelComments.setAttribute('for', 'comments')
            formLabelComments.append('Your Feedback:')

    const btnForm = document.createElement('button');
    btnForm.classList.add('btn-form', 'btn-primary', 'align-center');
    btnForm.append('Submit');


    navBar.insertAdjacentElement('afterend', info);
    info.append(infoPanelAbout);
    infoPanelAbout.append(infoPanelClose, headingPrimary, infoPanelContent);
    infoPanelContent.append(form);
    form.append(headingSecondary,formGroupName1,formGroupName2,formGroupEmail,formGroupPhoneNumber,headingSecondary2,formGroupComments,btnForm);
    formGroupName1.append(formLabelName1,formInputName1);
    formGroupName2.append(formLabelName2,formInputName2);
    formGroupEmail.append(formLabelEmail,formInputEmail);
    formGroupPhoneNumber.append(formLabelPhoneNumber, formInputPhoneNumber);
    formGroupComments.append(formLabelComments, formInputComments);
    


    infoPanelClose.addEventListener('click', ()=>{
        info.remove();
        navItems.forEach(item => {
            item.classList.remove('active');
        })
    })
}


export default contactInfo;




