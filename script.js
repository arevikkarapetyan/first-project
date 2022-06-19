"use strict";

const app = {
    restaurantDetails:  [
        {address: "Երևան, Թումանյան 14"},
        {telNumber: "015 12-23-45"},
        {mail: "info@template.am"},
        {facebook: "http://facebook.com/"},
        {instagram: "http://instagram.com/"},
        {type: "Ռեստորան"},
        {isDelivery: true},
        {isOpen: true}
    ],
    restaurantStaff: [
        {security: "Էդգար Գեվորգյան"},
        {security: "Արսեն Ավագյան"},
        {waiter: "Մելքոն Դանիելյան"},
        {waiter: "Ալիսա Պողոսյան"},
        {waiter: "Նելլի Դավթյան"},
        {waiter: "Քրիստինե Արսենյան"},
        {barman: "Տիգրան Ռուբենյան"},
        {barman: "Անի Առուստամյան"},
        {cook: "Կարինե Տոնոյան"},
        {cook: "Արտակ Ադամյան"},
        {administrator: "Լիկա Ավագյանց"},
        {courier: "Սամսոն Խաչատրյան"},
        {hostess: "Ալիսա Սուրենյանց"},
        {customer: "Մանե Սարգսյան"}
    ],
    restaurantMenu: [
        {
            type: "Տաք ուտեստներ",
            item1: "Խոզի Խորոված",
            item2: "Հավի Խորոված",
            item3: "Ճտի Տապակա ֆրիով",
            item4: "Ձկան Խորոված",
            item5: "Թփով Տոլմա",
            item6: "Կաղամբով Տոլմա",
            item7: "Քյուֆթա"
        },
        {
            type: "Աղցաններ",
            item1: "Մայրաքաղաքային",
            item2: "Հունական",
            item3: "Ամառյին",
            item4: "Ցեզար",
            item5: "Վինեգրեդ",
            item6: "Խեցգետնով",
            item7: "Բազուկով"
        },
        {
            type: "Ալկոհոլային Խմիչքներ",
            item1: "Օղի",
            item2: "Գինի",
            item3: "Կոնյակ",
            item4: "Վիսկի",
            item5: "Լիկյոր",
            item6: "Տեկիլա",
            item7: "Ռոմ"
        },
        {
            type: "Հյութեր և Զովացուցիչ Ըմպելիքներ",
            item1: "Տնական Կոմպոտ",
            item2: "Կոկա-Կոլա",
            item3: "Ֆանտա",
            item4: "Սփրայթ",
            item5: "Սեվըն Ափ",
            item6: "Թան",
            item7: "Լիմոնադ"
        },
        {
            type: "Խմորեղեններ",
            item1: "Միկադո",
            item2: "Սնիկերս",
            item3: "Տղամարդու Իդեալ",
            item4: "Տիրամիսու",
            item5: "Շոկոլադե",
            item6: "Մրգային",
            item7: "Բրաունի"
        }
    ],
    callCenter(address, telNumber, isDelivery, isOpen, type){
        return `
            Բարև Ձեզ, Ձեզ սպասարկում է ${app.restaurantStaff[13].customer}ը
            ${
                address = app.restaurantDetails[0].address !== undefined ?
                "Մեր հասցեն է " + app.restaurantDetails[0].address :
                "Կներեք, մենք հասցե չունենք"
            }
            ${
                telNumber = app.restaurantDetails[1].telNumber !== undefined ?
                "Մեր հեռախոսահամարն է " + app.restaurantDetails[1].telNumber :
                "Կներեք, մենք չունենք հեռախոսահամար"
            }
            ${
                isDelivery = app.restaurantDetails[6].isDelivery === true ?
                "Այո, կարող ենք իրականացնել Ձեր պատվերը" :
                "Կներեք, բայց մեր առաքիչը զբաղված է, պետք է դուք մոտենաք"
            }
            ${
                isDelivery = app.restaurantDetails[7].isOpen === true ?
                "Այո, ներկա պահին բաց ենք" :
                "Ոչ, կներեք մենք փակ ենք"
            }
        `;
    },

    isOpened(start, end) {
        start >= end ?
        app.restaurantDetails[7].isOpen = false:
        app.restaurantDetails[7].isOpen = true;
    },


// եթե ռեստորանը փակ է

    callCenterClosedMessage() { 
        return "Մենք արդեն փակվել ենք, կտեսնվենք վաղը";
    },

    callCenterResponser() {
        if ( app.restaurantDetails[7].isOpen === true ) {
            return app.callCenter(null, null, null, null);
        } else {
            return app.callCenterClosedMessage();
        }
    },


// եթե մատուցողը Արտակն է

    getTodaysCook() {
        return app.restaurantStaff[9].cook;
    },

    isClientPreferedTodaysCook(client)
    {
        if (client.preferedCook === app.getTodaysCook()) {
            return true;
        } else {
            return false;
        }
    },

  // թե գարեջուր չունենք
  
    clientOrder(order)
    {
        if (order === "գարեջուր" ) {
           return `Ես ${app.restaurantStaff[2].waiter} - նն եմ գարեջուր չունենք,
            մեր առկա տեսականին հետևյալն է ${Object.values(app.restaurantMenu[2])}`;
        } else {
            return " խնդրեմ" ;
        }
    },


    // տարբերակ 2

    clientOrderResponse(order)
    {
        let introduce = `Ես ${app.restaurantStaff[2].waiter} - նն եմ`;

        if (app.existInAlcoholicBeveragesList(order)) {
            return introduce + " խնդրեմ";
        } else {
            return introduce + `${order} չունենք,
            մեր առկա տեսականին է հետևյալն է ${Object.values(app.restaurantMenu[2])}`;
        }
    },


    existInAlcoholicBeveragesList(order)
    {
        let exist = false;

        switch (order) {
            case app.restaurantMenu[2].item1:
                exist = true;
                break;
        
            case app.restaurantMenu[2].item2:
                exist = true;
                break;

            case app.restaurantMenu[2].item3:
                exist = true;
                break;

            case app.restaurantMenu[2].item4:
                exist = true;
                break;

            case app.restaurantMenu[2].item5:
                exist = true;
                break;

            case app.restaurantMenu[2].item6:
                exist = true;
                break;

            case app.restaurantMenu[2].item7:
                exist = true;
                break;

            default:
                exist = false;
                break;
        }

        return exist; 
    }
};



app.isOpened(9, 24);

// const client = app.callCenter();

// console.log(client); 

// const arr = app.closedIs();1

// console.log(arr);   


// եթե ռեստորանը փակ է
app.isOpened(24, 22);

console.log(app.callCenterResponser());


// եթե մատուցողը Արտակն է
const client = {
    name: "Arevik",
    preferedCook: "Արտակ Ադամյան",
};

console.log(app.isClientPreferedTodaysCook(client));


// թե գարեջուր չունենք
console.log(app.clientOrderResponse(app.restaurantMenu[2].item7));
