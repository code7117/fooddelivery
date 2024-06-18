import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }

   
  categoriesData =[
    {id:1,name:'burger',img:'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',code:'burger'},
    {id:2,name:'pizza',img:'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',code:'pizza'},
    {id:3,name:'chicken',img:'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',code:'chicken'},
    {id:4,name:'briyani',img:'https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png',code:'briyani'},
    {id:5,name:'cake',img:'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png',code:'cake'},
    {id:6,name:'south indian',img:'https://b.zmtcdn.com/data/o2_assets/e1b5ebed94e25d832f8dea96824537521678798686.png',code:'south indian'},
  ];
  //product data
  productData = [
    {
      pdId: 8565,
      pdName: "Bucket briyani",
      pdDesc: "Chicken Bucket Biryani [Serves 4-5]+chicken [8 pieces]+Chicken 65 [6 pieces]+5 Boiled egg+ Brinjal Curry+Onion raita+ Plates",
      pdPrice: 1800,
      pdCategory: "briyani",
      pdImg: "https://b.zmtcdn.com/data/dish_photos/94a/67451bf548c768b099c398c36309d94a.jpeg?fit=around|130:130&crop=130:130;*,*"
    },
    {
      pdId: 8566,
      pdName: "Mandi Rice",
      pdDesc: "super tast enjoy with family",
      pdPrice: 1200,
      pdCategory: "briyani",
      pdImg: "https://images.pexels.com/photos/18620325/pexels-photo-18620325/free-photo-of-metal-plate-with-roasted-chicken-and-rice-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      pdId: 8567,
      pdName: "Bief briyani",
      pdDesc: "Chicken Bucket Biryani [Serves 4-5]+chicken [8 pieces]+Chicken 65 [6 pieces]+5 Boiled egg+ Brinjal Curry+Onion raita+ Plates",
      pdPrice: 1400,
      pdCategory: "briyani",
      pdImg: "https://images.pexels.com/photos/7426867/pexels-photo-7426867.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      pdId: 8568,
      pdName: "Fish briyani",
      pdDesc: "Chicken Bucket Biryani [Serves 4-5]+chicken [8 pieces]+Chicken 65 [6 pieces]+5 Boiled egg+ Brinjal Curry+Onion raita+ Plates",
      pdPrice: 1000,
      pdCategory: "briyani",
      pdImg: "https://images.pexels.com/photos/17649370/pexels-photo-17649370/free-photo-of-rice-and-meat-with-spices.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      pdId: 8569,
      pdName: "Leg briyani",
      pdDesc: "Chicken Bucket Biryani [Serves 4-5]+chicken [8 pieces]+Chicken 65 [6 pieces]+5 Boiled egg+ Brinjal Curry+Onion raita+ Plates",
      pdPrice: 1500,
      pdCategory: "briyani",
      pdImg: "https://media.istockphoto.com/id/1293749291/photo/biryani-rice-meal-for-ramadan-iftar-dinner.jpg?s=612x612&w=0&k=20&c=ZGBzGGHyvzKyqCu0bJJyctQSpCd2IcWITO5oyQ6gVKg="
    },
    {
      pdId: 8570,
      pdName: "veg briyani",
      pdDesc: "Chicken Bucket Biryani [Serves 4-5]+chicken [8 pieces]+Chicken 65 [6 pieces]+5 Boiled egg+ Brinjal Curry+Onion raita+ Plates",
      pdPrice: 1900,
      pdCategory: "briyani",
      pdImg: "https://th.bing.com/th/id/OIP.-LXtptVthvAyI37kpe_siQHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      pdId: 8571,
      pdName: "egg briyani",
      pdDesc: "Chicken Bucket Biryani [Serves 4-5]+chicken [8 pieces]+Chicken 65 [6 pieces]+5 Boiled egg+ Brinjal Curry+Onion raita+ Plates",
      pdPrice: 1200,
      pdCategory: "briyani",
      pdImg: "https://th.bing.com/th/id/OIP.8WPvNTDMmeKTZRKgFw1ODAHaD9?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      pdId: 8572,
      pdName: "prawn briyani",
      pdDesc: "Chicken Bucket Biryani [Serves 4-5]+chicken [8 pieces]+Chicken 65 [6 pieces]+5 Boiled egg+ Brinjal Curry+Onion raita+ Plates",
      pdPrice: 1100,
      pdCategory: "briyani",
      pdImg: "https://th.bing.com/th/id/OIP.A2phbdBG7fUVcaHJNC7a1wHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      pdId: 8573,
      pdName: "Pot briyani",
      pdDesc: "Chicken Bucket Biryani [Serves 4-5]+chicken [8 pieces]+Chicken 65 [6 pieces]+5 Boiled egg+ Brinjal Curry+Onion raita+ Plates",
      pdPrice: 1700,
      pdCategory: "briyani",
      pdImg: "https://th.bing.com/th/id/OIP.9uu1Qw-8XsNWwtsx5cabRgHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      pdId: 8574,
      pdName: "mutton briyani",
      pdDesc: "Chicken Bucket Biryani [Serves 4-5]+chicken [8 pieces]+Chicken 65 [6 pieces]+5 Boiled egg+ Brinjal Curry+Onion raita+ Plates",
      pdPrice: 900,
      pdCategory: "briyani",
      pdImg: "https://th.bing.com/th/id/OIP.myT9jrO7gOaN56YV85e01QHaFj?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },


    {
      pdId: 8575,
      pdName: "cheese burger",
      pdDesc: "yuumy with cheese",
      pdPrice: 900,
      pdCategory: "burger",
      pdImg: "https://th.bing.com/th/id/OIP.n-x0aGScXztEGuUuN356nQHaE8?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      pdId: 8576,
      pdName: "veg burger",
      pdDesc: "yuumy with cheese",
      pdPrice: 600,
      pdCategory: "burger",
      pdImg: "https://th.bing.com/th/id/OIP.qR5fmQNbXkkBTp_ujhkDzQHaE8?w=302&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      pdId: 8577,
      pdName: "non-veg burger",
      pdDesc: "yuumy with cheese",
      pdPrice: 600,
      pdCategory: "burger",
      pdImg: "https://th.bing.com/th/id/OIP.fsE40Y7LntWwvZEJOFIs_gHaE8?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      pdId: 8578,
      pdName: "veg-burger with frenchfries",
      pdDesc: "yuumy with cheese",
      pdPrice: 600,
      pdCategory: "burger",
      pdImg: "https://th.bing.com/th/id/OIP.tVgFCPWNZt7hW5Mvy5f2QgHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      pdId: 8579,
      pdName: "nonveg-burger with frenchfries",
      pdDesc: "yuumy with cheese",
      pdPrice: 800,
      pdCategory: "burger",
      pdImg: "https://th.bing.com/th/id/OIP.UBSuFKFFDcbp4o4xw0IF9AHaE7?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },


    {
      pdId: 8580,
      pdName: "veg-pizza",
      pdDesc: "yuumy with cheese",
      pdPrice: 800,
      pdCategory: "pizza",
      pdImg: "https://th.bing.com/th/id/OIP.ocE5c48eK8ybl7fDJJs19wHaFj?w=242&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      pdId: 8581,
      pdName: "nonveg-pizza",
      pdDesc: "yuumy with cheese",
      pdPrice: 1200,
      pdCategory: "pizza",
      pdImg: "https://th.bing.com/th/id/OIP.n5OSaU30sIPnFervXL76hwAAAA?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      pdId: 8582,
      pdName: "cheese-pizza",
      pdDesc: "yuumy with cheese",
      pdPrice: 1100,
      pdCategory: "pizza",
      pdImg: "https://th.bing.com/th/id/OIP.zMuWkN419LQx4gN6_yJBdgHaEK?w=330&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      pdId: 8583,
      pdName: "chicken pakora",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "south indian",
      pdImg: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347434/india-food-chicken-pakora/india-food-chicken-pakora-1120x732.jpg"
    },
    {
      pdId: 8584,
      pdName: "vada pav",
      pdDesc: "yuumy with cheese",
      pdPrice: 700,
      pdCategory: "south indian",
      pdImg: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347356/india-food-vada-pav/india-food-vada-pav-1120x732.jpg"
    },
    {
      pdId: 8585,
      pdName: "idli",
      pdDesc: "yuumy with cheese",
      pdPrice: 900,
      pdCategory: "south indian",
      pdImg: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347416/india-food-idli/india-food-idli-1120x732.jpg"
    },
    {
      pdId: 8586,
      pdName: "parotta",
      pdDesc: "yuumy with cheese",
      pdPrice: 700,
      pdCategory: "south indian",
      pdImg: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347392/india-food-paratha/india-food-paratha-1120x732.jpg"
    },
    {
      pdId: 8587,
      pdName: "nan",
      pdDesc: "yuumy with cheese",
      pdPrice: 1000,
      pdCategory: "south indian",
      pdImg: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347396/india-food-naan/india-food-naan-1120x732.jpg"
    },
    {
      pdId: 8588,
      pdName: "alo gobi",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "south indian",
      pdImg: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347459/india-food-aloo-gobi/india-food-aloo-gobi-1120x732.jpg"
    },
    {
      pdId: 8589,
      pdName: "butter chicken",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "south indian",
      pdImg: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347444/india-food-butter-chicken/india-food-butter-chicken-1120x732.jpg"
    },
    {
      pdId: 8590,
      pdName: "dal tadka",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "south indian",
      pdImg: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347425/india-food-dal-tadka/india-food-dal-tadka-1120x732.jpg"
    },
        {
      pdId: 8591,
      pdName: "masal dosa",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "south indian",
      pdImg: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347401/india-food-masala-dosa/india-food-masala-dosa-1120x732.jpg"
    },
    {
      pdId: 8592,
      pdName: "tandoori rice",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "south indian",
      pdImg: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347361/india-food-tandoori-chicken/india-food-tandoori-chicken-1120x732.jpg"
    },
    {
      pdId: 8593,
      pdName: "samosa",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "south indian",
      pdImg: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347369/india-food-samosa/india-food-samosa-1120x732.jpg"
    },
    {
      pdId: 8594,
      pdName: "rasamalai",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "south indian",
      pdImg: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347382/india-food-ras-malai/india-food-ras-malai-1120x732.jpg"
    },
    {
      pdId: 8595,
      pdName: "gulab jamun",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "south indian",
      pdImg: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347420/india-food-gulab-jamun/india-food-gulab-jamun-1120x732.jpg"
    },
    {
      pdId: 8596,
      pdName: " Funfetti Cake",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Birthday-Funfetti-Cake.jpg"
    },
    {
      pdId: 8597,
      pdName: "black forest ",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Black-Forest-Cake.jpg"
    },
    {
      pdId: 8598,
      pdName: "red velvet ",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Red-Velvet-Cake.jpg"
    },
    {
      pdId: 8599,
      pdName: "cup cakes ",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Cupcakes.jpg"
    },
    {
      pdId: 8600,
      pdName: " devil food cake",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Devils-Food-Cake.jpg"
    },
    {
      pdId: 8601,
      pdName: " angel food cake",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/berry-angel-food-cake.jpg"
    },
    {
      pdId: 8602,
      pdName: "upside down cake ",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Upside-Down-Cake.jpg"
    },
    {
      pdId: 8603,
      pdName: "Hummingbird Cake ",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Hummingbird-Cake.jpg"
    },
    {
      pdId: 8604,
      pdName: "  Chocolate Cake",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Chocolate-Cake.jpg"
    },
    {
      pdId: 8604,
      pdName: "  Carrot Cake",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Carrot-Cake.jpg"
    },
    {
      pdId: 8605,
      pdName: "  opera cake",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Opera-Cake.jpg"
    },
    {
      pdId: 8606,
      pdName: " butter cake",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Butter-Cake.jpg"
    },
    {
      pdId: 8607,
      pdName: " No-Bake Cheesecake",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/No-Bake-Cheesecake.jpg"
    },
    {
      pdId: 8608,
      pdName: " Ice Cream Cakes ",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://insanelygoodrecipes.com/wp-content/uploads/2022/11/Ice-Cream-Cakes.jpg"
    },
    {
      pdId: 8609,
      pdName: " oreo shake ",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://th.bing.com/th/id/OIP.zfNna8Q-IF5kVNPTraLHuQHaLH?w=202&h=370&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      pdId: 8610,
      pdName: "hershey shake",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://th.bing.com/th/id/OIP.GqQEKDZwuQayQMBcWse2oAHaLD?w=202&h=302&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      pdId: 8611,
      pdName: "mango shake",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://th.bing.com/th/id/OIP.GqQEKDZwuQayQMBcWse2oAHaLD?w=202&h=302&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      pdId: 8612,
      pdName: "banana shake",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://media.istockphoto.com/id/1194152250/photo/vegan-banana-and-oatmeal-smoothie-in-glass-jar-on-the-light-background.jpg?s=612x612&w=0&k=20&c=np9DgHLFcUJwY5hzLd3aSLzebaYDzPzerkEGbuGy0tY="
    },
    {
      pdId: 8613,
      pdName: "cupcake shake",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://media.istockphoto.com/id/1138439417/photo/freakshake-milkshake-with-donuts-cream-and-cookies.jpg?s=612x612&w=0&k=20&c=u_ekQ7swNrL-DTfmK_dJURPeFHvmPJ8yw1IjZFynnBo="
    },
    {
      pdId: 8614,
      pdName: "strawberry shake",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://media.istockphoto.com/id/1316514252/photo/strawberry-quinoa-pudding-in-a-glass-jar.jpg?s=612x612&w=0&k=20&c=HEEz3io0oQY_1dG6VMniJuPn_kek5kIQKFjSk9k2LRo="
    },
    {
      pdId: 8615,
      pdName: "monster shake",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://media.istockphoto.com/id/1143122018/photo/chocolate-freak-shake-topping-with-donut-and-caramel-popcorn-on-the-party-table.jpg?s=612x612&w=0&k=20&c=52-v-XF_vGKjhV9NZYeoSln2FMI-7dNCGT7eO1hjMtQ="
    },
    {
      pdId: 8617,
      pdName: "lemon mojito",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://media.istockphoto.com/id/471447415/photo/close-up-of-mojito-glass-with-lemon-slices-blurred-in-back.jpg?s=612x612&w=0&k=20&c=qBwD2QtwN6p_sIAE6Ren3o5SRnxxqarQvtDhTsbj9Dc="
    },
    {
      pdId: 8618,
      pdName: "mango mojito",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://media.istockphoto.com/id/2152686730/photo/selective-focus-of-mango-mojito-with-a-grey-background.jpg?s=612x612&w=0&k=20&c=6PEKozTroGzaBO6fD8SKZhZMYjE1RQkRgSyGk1B3h6s="
    },
    {
      pdId: 8619,
      pdName: "strawberry mojito",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://media.istockphoto.com/id/1372985286/photo/strawberry-alcoholic-cocktail-with-fresh-mint.jpg?s=612x612&w=0&k=20&c=OD_nyYkmnoC_oLBSXOSbIw0P05fTv5VHKlyklQu9DWI="
    },
    {
      pdId: 8620,
      pdName: "colorful mojito",
      pdDesc: "yuumy with cheese",
      pdPrice: 500,
      pdCategory: "cake",
      pdImg: "https://media.istockphoto.com/id/1486889234/photo/two-colorful-cocktails-on-the-beach-in-summer.jpg?s=612x612&w=0&k=20&c=a0WbbN8R-4mr8skW2MV0fPitODda67irWZMhzDFDe7E="
    },
    {
      pdId: 8621,
      pdName: "tandoori chicken",
      pdDesc: "yuumy with cheese",
      pdPrice: 1000,
      pdCategory: "chicken",
      pdImg: "https://media.istockphoto.com/id/155369528/photo/tandoori-chicken.jpg?s=612x612&w=0&k=20&c=n0fQ02EqAHOt2-XsYl69rNJZudKg2V82R2dpW_8-Fq8="
    },
    {
      pdId: 8622,
      pdName: "tandoori chicken with mint",
      pdDesc: "yuumy with cheese",
      pdPrice: 1000,
      pdCategory: "chicken",
      pdImg: "https://media.istockphoto.com/id/1363311536/photo/tandoori-chicken.jpg?s=612x612&w=0&k=20&c=h8sNMzT9SsJzFL8fxkw2icHEneneGsKXdyPckOvEzsk="
    },
    {
      pdId: 8623,
      pdName: "chicken karahi",
      pdDesc: "yuumy with cheese",
      pdPrice: 1000,
      pdCategory: "chicken",
      pdImg: "https://media.istockphoto.com/id/1443602402/photo/chicken-karahi-korma-msala-served-in-dish-isolated-on-table-top-view-of-asian-and-indian-food.jpg?s=612x612&w=0&k=20&c=Ir7YJfthuCg-nVxVStgSvV217pYSbvHVFTwFXTFtfmU="
    },
    {
      pdId: 8624,
      pdName: "chillie-sprinkled-wings",
      pdDesc: "yuumy with cheese",
      pdPrice: 1000,
      pdCategory: "chicken",
      pdImg: "https://media.istockphoto.com/id/484811804/photo/crispy-chillie-sprinkled-chicken-wings-on-a-plate.jpg?s=612x612&w=0&k=20&c=7hV8O-hlKbeM-vFttMXXUuZSp17CYr3TjClVPTYDGjM="
    },
    {
      pdId: 8625,
      pdName: "roast chicken",
      pdDesc: "yuumy with cheese",
      pdPrice: 1000,
      pdCategory: "chicken",
      pdImg: "https://media.istockphoto.com/id/498128837/photo/roast-chicken-with-potatoes-and-onions-in-cast-iron-pan.jpg?s=612x612&w=0&k=20&c=q_enc-uDEQF2WmIj3QFJwblW0pDzetfukHjYU1BXJ-4="
    },
    {
      pdId: 8626,
      pdName: "baked chicken",
      pdDesc: "yuumy with cheese",
      pdPrice: 900,
      pdCategory: "chicken",
      pdImg: "https://media.istockphoto.com/id/835903320/photo/baked-chicken-wings-with-sesame-seeds-and-sweet-chili-sauce-on-white-wooden-board.jpg?s=612x612&w=0&k=20&c=SH8ZCkEKuWD_wxulpntIJ0uD4yRnUf9UXovQwSwrmmA="
    },
    {
      pdId: 8627,
      pdName: " chicken nuggets",
      pdDesc: "yuumy with cheese",
      pdPrice: 1200,
      pdCategory: "chicken",
      pdImg: "https://media.istockphoto.com/id/1153673258/photo/chicken-nuggets-with-ketchup-directly-from-above-photo.jpg?s=612x612&w=0&k=20&c=qtSZfB2pOHFtN9a2slhzulqYNUevXy0HqrU2hMB9waM="
    },
    {
      pdId: 8628,
      pdName: " chicken drumstick",
      pdDesc: "yuumy with cheese",
      pdPrice: 1400,
      pdCategory: "chicken",
      pdImg: "https://media.istockphoto.com/id/1133396172/photo/indian-style-fried-chicken-drumsticks.jpg?s=612x612&w=0&k=20&c=PJPDcmGy1C4JW0KN1UTG85FW2H7oqNQRIx9h9K4WOPk="
    },
    {
      pdId: 8629,
      pdName: " chicken grilled",
      pdDesc: "yuumy with cheese",
      pdPrice: 1400,
      pdCategory: "chicken",
      pdImg: "https://media.istockphoto.com/id/1329496904/photo/grilled-assorted-meat-platter-with-potato-wedges-and-sauces.jpg?s=612x612&w=0&k=20&c=NgyWtoc5fMBUZwTX4rFNag29hY4X7SosxZBlExPq46o="
    },
    {
      pdId: 8630,
      pdName: " chicken peanut",
      pdDesc: "yuumy with cheese",
      pdPrice: 1300,
      pdCategory: "chicken",
      pdImg: "https://media.istockphoto.com/id/1154908183/photo/thai-chicken-satay-with-peanut-sauce.jpg?s=612x612&w=0&k=20&c=zYPePeN5b4dB7PxyQXIGJz3_ra8xi8dwLBN8jXWFZxk="
    },
    {
      pdId: 8631,
      pdName: " chicken egg",
      pdDesc: "yuumy with cheese",
      pdPrice: 1300,
      pdCategory: "chicken",
      pdImg: "https://media.istockphoto.com/id/1170082850/photo/moroccan-recipe-chicken-with-eggplant-almonds-with-vegetable-gravy-close-up-in-a-pan-on-the.jpg?s=612x612&w=0&k=20&c=yjV2voU9zABFANulxJaA2QXP-qLd-jN6CpFIitpt5PA="
    },
    {
      pdId: 8632,
      pdName: " butter chicken",
      pdDesc: "yuumy with cheese",
      pdPrice: 1600,
      pdCategory: "chicken",
      pdImg: "https://media.istockphoto.com/id/875376328/photo/butter-chicken-curry.jpg?s=612x612&w=0&k=20&c=Ah3IWKbpuf3HYqikGtQOxTD7YmCNSxsZ0sWbLTrW_Eo="
    },
    {
      pdId: 8633,
      pdName: " chicken salad",
      pdDesc: "yuumy with cheese",
      pdPrice: 1000,
      pdCategory: "chicken",
      pdImg: "https://media.istockphoto.com/id/682923236/photo/grilled-chicken-breast-with-potatoes-and-vegetables-salad.jpg?s=612x612&w=0&k=20&c=jYAxu2wuA22uRAgBDH4-x6N1vDkMrvmrOBRR0frPevo="
    },


  ];


}
