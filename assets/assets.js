import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import latex from './latex.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import energytrends_image from './public/energytrends_image.png';
import walmartsales_image from './public/walmartsales_image.png';
import Organohalide_image from './public/Organohalide_image.png';
import veggie_image from './public/veggie.png';
import YoutubeAPI_image from './public/YoutubeAPI.png';
import calgary_image from './public/calgary.png';
import cancer_image from './public/cancer.png';
import github_mark from './github-mark.png';



export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    github_mark,
};


export const workData = [
    {
        title: 'Energy Trends: Financing, Production & Renewables',
        description: 'This analysis examines global trends in renewable energy using data on capacity, production, investment, and utilization. It reveals growth in renewable energy capacity worldwide, with countries like China leading in total capacity and Iceland in per capita capacity. The analysis also finds a moderate correlation between investment and capacity growth, suggesting that increased investment is driving renewable energy development.',
        bgImage: energytrends_image,
        skills: ['SQL', 'Python'],
        githubLink: 'https://github.com/MHadd0/Projects/blob/main/Energy%20Trends_Financing_Production_Renewables.pdf',
    },
    {
        title: 'Supermarket PCA and Clustering Analysis',
        description: 'This project focused on using data analysis techniques to understand decluttering patterns and preferences among clients. Through this research, I was able to develop personalized decluttering strategies based on data insights.',
        bgImage: veggie_image,
        skills: ['Python', 'Power BI','ML'],
        githubLink: 'https://github.com/MHadd0/Projects/blob/main/Supermarket%20PCA%20and%20Clustering%20Analysis.pdf',
    },
    {
        title: `Decade of Clarity: A Ten-Year Review of Calgary's Water Quality`,
        description: '', 
        bgImage: calgary_image,
        skills: ['Python', 'Tableau'],
        githubLink: 'https://medium.com/@matthewhaddad1234/decade-of-clarity-a-ten-year-review-of-calgarys-water-quality-30e04eec8315', 
    },
    {
        title: 'YouTube API Topic and Sentiment Analysis',
        description: 'This project was focused on using data analysis techniques to understand decluttering patterns and preferences among clients. Through this research, I was able to develop personalized decluttering strategies based on data insights.',
        bgImage: YoutubeAPI_image,
        skills: ['Python', 'ML'],
        githubLink: 'https://github.com/MHadd0/Projects/blob/main/Youtube%20API%20Topic%20and%20Sentiment%20Analysis.pdf',
    },
    {
        title: 'Walmart Sales: Multiple Linear Regression',
        description: 'This study built a multiple linear regression model to predict Walmart sales using factors like temperature and holidays. They analyzed data on stores, sales, and economic indicators, then checked the model\'s assumptions and incorporated interaction terms for a more nuanced picture. Despite limitations, the research offers insights into sales-influencing factors at these Walmart locations.',
        bgImage: walmartsales_image,
        skills: ['Python', 'ML'],
        githubLink: 'https://github.com/MHadd0/Projects/blob/main/WalmartSales_MultipleLinearRegression.pdf',
    },
    {
        title: 'Organohalide Nucleophilic Substitution Transition State Analysis',
        description: 'This study used GAMESS software to find the high-energy intermediate state (transition state) in SN2 reactions of haloethanes and hydroxide. MP2 theory with a small basis set efficiently located the transition state, while a different method (DFT) was less effective. For heavier halogens like iodine, the method faced challenges, suggesting basis set size is crucial for accurate transition state calculations.',
        bgImage: Organohalide_image,
        skills: ['Research', 'GAMESS', 'Python'],
        githubLink: 'https://github.com/MHadd0/Projects/blob/main/Organohalide_Nucleophilic_Substitution_Transition_State_Analysis.pdf',
    },
    {
        title: 'Breast Cancer Gene ML Modeling',
        description: 'This study analyzed BRCA2 gene variants using logistic regression, LDA, QDA, and regression tree models to classify their impacts as benign or damaging. Data from gnomAD and ClinVar provided insights into genetic, population, and in silico predictors, with logistic regression emerging as the most accurate model. While limitations remain, this research offers valuable understanding of the factors influencing BRCA2 variant pathogenicity and lays the groundwork for future genetic studies.',
        bgImage: cancer_image,
        skills: ['Python', 'R', 'Tableau'],
        githubLink: 'https://github.com/MHadd0/Projects/blob/main/Breast%20Cancer%20Gene%20ML%20Modeling.pdf',
    },
];

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: `Master's of Data Science and Analytics`},  
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: `Bachelor of Science Chemistry`},   
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Skills', description: 'Power BI, Tableau, Microsoft Office' },    
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, SQL, R, HTML, CSS, JavaScript React Js, Next Js' }

];

export const toolsData = [
    vscode, figma, git, latex
];