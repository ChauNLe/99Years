//This is the file to store data to run the game.

let question_bank = [
    "You unbox a new macbook at the park, do you thow the trash away",
    "Do you need to wash your clothes using laundry degeterent and the washing machine",
    "Do you need to flush the toilet after using it",
    "Do you eat meat for lunch?",
    "Do you go to the gym?",
    "Do you turn off the lights in your room when leaving the house?",
    "Do you smoke?",
    "Do dispose your batteries for recycle?",
    "You going shopping for groceries, the shop clerk asked if you wanted  to use plastic bags?",
    "You go to a fast food restaurant and you are too full to continue eating, do you throw the food away?",
    "You just finished a water bottle, do you recycle it?",
    "You got invited to a late night party, do you go?",
    "You ordered at starbucks, do you use a plastic straw?",
    "You eat at your chinese girlfriend's parent house, do you use disposable chopsticks?",
    "You decided to go to a hackathon, do you pull an all-nighter?",
    "Cow's fart is methane gas, do you choose to stop being a vegetarian?",
    "Over consuming energy is bad, do you charge you phone overnight?",
    "Electric cars are getting more popular, do you buy one?",
    "The rich are getting richer, do you raise taxs on them?",
    "The temperature of your kingdom is rising, do you encourage everyone to get AC?",
    "The temperature of your kingdom is rising, do you ban all fossil fuel veichles?",
    "Your kingdom is suffering through a drought, do you distribute water bottles?",
    "Many people are opening new businesses, do you help fund small companies?",
    "The neighboring kingdom wants to trade with you, do you accept?",
    "Your kingdom is sufferring from a small pox disease, do you lower health care cost?",
    "A thief steals a bunch of money from your kingdom, do you raise taxes?",
    "People are complaining about the water sewage system, do you fix it ?",
    "The townspeople want to start a garden, do you fund them?",
    "The people want more housing, do you build more apartments?",
    "Disease is spreading, do you shut down travel?",
    "Your kingdom just discover an oil well, do you excavate it?",
    "Buisnesses are requesting to lower minimum wage, do you agree?",
    "Not everyone has access to the internet, do you open a computer lab?",
    "Your kingdom's population increase, do you expand you territory?",
    "You just have stressful day, do you drink alcohol to relieve yourself? ",
    "Your kingdom obesity rate are increasing, do you increase tax on fastfood restaurants ",
    "A big company asks for permission to convert a park into a new office building, do you accept?",
    "People are demanding a new year party at the end of the year, do you allow it?",
    "People are complaining about companies dumping trash in the streets, do you make laws prohibiting companies from dumping trash in public areas?",
    "Workers want to take nap breaks, do you allow this?",
    "People are complaing about pet owners not picking up after their pets. Do you tax the pet owners?",
    "Too many restaraunts are using plastic utensils, do you raise taxes on plastic utensils?",
    "The national hospital is requesting more funding for their healthcare program, do you provide?",
    "The military is requesting more funding for their nuclear program, do you provide?",
    "Local buisnesses are requesting lower taxes in order to help promote local buisnesses. Do you lower the taxes?",
    "Scientists said that in 5 years there will be a lot of natural disasters due to global warming, do you ban all fossil fuel uses?",
    "Your kingdom just discover a gold mine, do you excavate it?"
];

let yes_data = {
    "You unbox a new macbook at the park, do you thow the trash away": [1, 0, 0, 0],
    "Do you need to wash your clothes using laundry degeterent and the washing machine": [-1, 0, 1, 1],
    "Do you need to flush the toilet after using it": [-1, 0, 1, 0],
    "Do you eat meat for lunch?": [-1, 0, 1, 1],
    "Do you go to the gym?": [0, 1, 1, 0],
    "Do you turn off the lights in your room when leaving the house?": [1, 0, 0, 1],
    "Do you smoke?": [-1, -2, -1, 1],
    "Do dispose your batteries for recycle?": [1, 0, 0, 1],
    "You going shopping for groceries, the shop clerk asked if you wanted  to use plastic bags?": [-1, 0, 1, 1],
    "You go to a fast food restaurant and you are too full to continue eating, do you throw the food away?": [-1, 0, -1, -1],
    "You just finished a water bottle, do you recycle it?": [1, 0, 1, 1],
    "You got invited to a late night party, do you go?": [-1, -1, -1, -1],
    "You ordered at starbucks, do you use a plastic straw?": [-1, 0, 1, 1],
    "You eat at your chinese girlfriend's parent house, do you use disposable chopsticks?": [-1, 0, 1, -1],
    "You decided to go to a hackathon, do you pull an all-nighter?": [0, -1, -1, 0],
    "Cow's fart is methane gas, do you choose to stop being a vegetarian?": [1, 1, 1, -1],
    "Over consuming energy is bad, do you charge you phone overnight?": [-1, 0, 1, -1],
    "Electric cars are getting more popular, do you buy one?": [1, 0, 1, 1],
    "The rich are getting richer, do you raise taxs on them?": [0, 0, 1, 1],
    "The temperature of your kingdom is rising, do you encourage everyone to get AC?": [0, 0, 1, -1],
    "The temperature of your kingdom is rising, do you ban all fossil fuel veichles?": [1, 1, -1, -1],
    "Your kingdom is suffering through a drought, do you distribute water bottles?": [-1, 1, 1, -1],
    "Many people are opening new businesses, do you help fund small companies?": [0, 0, 1, 1],
    "The neighboring kingdom wants to trade with you, do you accept?": [0, 0, 1, 1],
    "Your kingdom is sufferring from a small pox disease, do you lower health care cost?": [0, 1, 1, -1],
    "A thief steals a bunch of money from your kingdom, do you raise taxes?": [0, 0, -1, -2],
    "People are complaining about the water sewage system, do you fix it ?": [1, 1, 1, -1],
    "The townspeople want to start a garden, do you fund them?": [1, 0, 1, -1],
    "The people want more housing, do you build more apartments?": [-1, 1, 1, -1],
    "Disease is spreading, do you shut down travel?": [0, 1, -1, -1],
    "Your kingdom just discover an oil well, do you excavate it?": [-1, 0, 1, 2],
    "Buisnesses are requesting to lower minimum wage, do you agree?": [0, 0, 1, -1],
    "Not everyone has access to the internet, do you open a computer lab?": [0, 0, 1, -1],
    "Your kingdom's population increase, do you expand you territory?": [-1, 0, 1, -1],
    "You just have stressful day, do you drink alcohol to relieve yourself? ": [-1, -1, 1, -1],
    "Your kingdom obesity rate are increasing, do you increase tax on fastfood restaurants ": [0, 1, 1, -1],
    "A big company asks for permission to convert a park into a new office building, do you accept?": [-1, -1, 1, 0],
    "People are demanding a new year party at the end of the year, do you allow it?": [-1, -1, 2, -1],
    "People are complaining about companies dumping trash in the streets, do you make laws prohibiting companies from dumping trash in public areas?": [1, 1, 1, 1],
    "Workers want to take nap breaks, do you allow this?": [0, 1, 1, 0],
    "People are complaing about pet owners not picking up after their pets. Do you tax the pet owners?": [0, 0, 1, 0],
    "Too many restaraunts are using plastic utensils, do you raise taxes on plastic utensils?": [1, 0, -1, 1],
    "The national hospital is requesting more funding for their healthcare program, do you provide?": [0, 1, 1, -1],
    "The military is requesting more funding for their nuclear program, do you provide?": [-1, -1, 1, -1],
    "Local buisnesses are requesting lower taxes in order to help promote local buisnesses. Do you lower the taxes?": [0, 0, 1, -1],
    "Scientists said that in 5 years there will be a lot of natural disasters due to global warming, do you ban all fossil fuel uses?": [1, 1, 1, -2],
    "Your kingdom just discover a gold mine, do you excavate it?": [0, 0, 1, 1]
};

let no_data = {
    "You unbox a new macbook at the park, do you thow the trash away": [-1, 0, 0, 0],
    "Do you need to wash your clothes using laundry degeterent and the washing machine": [1, 0, -1, -1],
    "Do you need to flush the toilet after using it": [1, 0, -1, 0],
    "Do you eat meat for lunch?": [1, 0, -1, -1],
    "Do you go to the gym?": [0, -1, -1, 0],
    "Do you turn off the lights in your room when leaving the house?": [-1, 0, 0, -1],
    "Do you smoke?": [1, 2, 1, -1],
    "Do dispose your batteries for recycle?": [-1, 0, 0, -1],
    "You going shopping for groceries, the shop clerk asked if you wanted  to use plastic bags?": [1, 0, -1, -1],
    "You go to a fast food restaurant and you are too full to continue eating, do you throw the food away?": [1, 0, 1, 1],
    "You just finished a water bottle, do you recycle it?": [-1, 0, -1, -1],
    "You got invited to a late night party, do you go?": [1, 1, 1, 1],
    "You ordered at starbucks, do you use a plastic straw?": [1, 0, -1, -1],
    "You eat at your chinese girlfriend's parent house, do you use disposable chopsticks?": [1, 0, -1, 1],
    "You decided to go to a hackathon, do you pull an all-nighter?": [0, 1, 1, 0],
    "Cow's fart is methane gas, do you choose to stop being a vegetarian?": [-1, -1, -1, 1],
    "Over consuming energy is bad, do you charge you phone overnight?": [1, 0, -1, 1],
    "Electric cars are getting more popular, do you buy one?": [-1, 0, -1, -1],
    "The rich are getting richer, do you raise taxs on them?": [0, 0, -1, -1],
    "The temperature of your kingdom is rising, do you encourage everyone to get AC?": [0, 0, -1, 1],
    "The temperature of your kingdom is rising, do you ban all fossil fuel veichles?": [-1, -1, 1, 1],
    "Your kingdom is suffering through a drought, do you distribute water bottles?": [1, -1, -1, 1],
    "Many people are opening new businesses, do you help fund small companies?": [0, 0, -1, -1],
    "The neighboring kingdom wants to trade with you, do you accept?": [0, 0, -1, -1],
    "Your kingdom is sufferring from a small pox disease, do you lower health care cost?": [0, -1, -1, 1],
    "A thief steals a bunch of money from your kingdom, do you raise taxes?": [0, 0, 1, 2],
    "People are complaining about the water sewage system, do you fix it ?": [-1, -1, -1, 1],
    "The townspeople want to start a garden, do you fund them?": [-1, 0, -1, 1],
    "The people want more housing, do you build more apartments?": [1, -1, -1, 1],
    "Disease is spreading, do you shut down travel?": [0, -1, 1, 1],
    "Your kingdom just discover an oil well, do you excavate it?": [1, 0, -1, -2],
    "Buisnesses are requesting to lower minimum wage, do you agree?": [0, 0, -1, 1],
    "Not everyone has access to the internet, do you open a computer lab?": [0, 0, -1, 1],
    "Your kingdom's population increase, do you expand you territory?": [1, 0, -1, 1],
    "You just have stressful day, do you drink alcohol to relieve yourself? ": [1, 1, -1, 1],
    "Your kingdom obesity rate are increasing, do you increase tax on fastfood restaurants ": [0, -1, -1, 1],
    "A big company asks for permission to convert a park into a new office building, do you accept?": [1, 1, -1, 0],
    "People are demanding a new year party at the end of the year, do you allow it?": [1, 1, -2, 1],
    "People are complaining about companies dumping trash in the streets, do you make laws prohibiting companies from dumping trash in public areas?": [-1, -1, -1, -1],
    "Workers want to take nap breaks, do you allow this?": [0, -1, -1, 0],
    "People are complaing about pet owners not picking up after their pets. Do you tax the pet owners?": [0, 0, -1, 0],
    "Too many restaraunts are using plastic utensils, do you raise taxes on plastic utensils?": [-1, 0, 1, -1],
    "The national hospital is requesting more funding for their healthcare program, do you provide?": [0, -1, -1, 1],
    "The military is requesting more funding for their nuclear program, do you provide?": [1, 1, -1, 1],
    "Local buisnesses are requesting lower taxes in order to help promote local buisnesses. Do you lower the taxes?": [0, 0, -1, 1],
    "Scientists said that in 5 years there will be a lot of natural disasters due to global warming, do you ban all fossil fuel uses?": [-1, -1, -1, 2],
    "Your kingdom just discover a gold mine, do you excavate it?": [0, 0, -1, -1]
};
