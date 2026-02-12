import { translations as componentsTranslations } from '../components/translations';
import { translations as searchIconTranslations } from '../app-pages/searchIcon/translations';
// import {translations as advanceFilterTranslations} from '@/app/components/filtermodel/translations'
// import {translations as authenticationTranslations} from '@/app/pages/authentication/translations';
// import { translations as dashboardTranslations } from '@/app/components/user-profile/side-bar/translations';
// import { translations as userProfileTranslations } from '@/app/pages/user-profile/translations';
// import { translations as submitPropertyTranslations } from '@/app/pages/submit-property/translations';
// import { translations as propertyListingTranslations } from '@/app/pages/property-listing/translations';
// import { translations as sideFilterTranslations } from '@/app/components/sidefilter/translations';  
// import { translations as singlePropertyTranslations } from '@/app/pages/single-property/translations';
const common = {
  en: {
    ejar: 'Ejar',
    welcome: 'Welcome to',
    slogun: 'Your rent is a click away',
    promot: 'Promote your',
    estate: 'estate',
    here: 'Here',
    search: 'Search',
    advance: 'Advance',
    selectProprty:'Property Type',
    areas:'Areas',
    browse:'Browse',
    rent:'Rent',
    settle:'Settle In',
    whatsnew: "Here's what's new",
    morehere: 'more here',
    expolre: 'Explore',
    PromoteTitle:'Promote',
    estateToday:'Your estate today',
    promoteHere: 'Promote Here',
    learnMore:'Learn More',
    KWD:'KWD',
  },
  ar: {
    ejar: 'إيجار',
    welcome: `أهلاً بكم في`,
    slogun: 'إيجارك على بُعد نقرة واحدة',
    promot: 'روّج لـ',
    estate: 'عقار',
    here:'انقر هنا',
    search: 'ابحث هنا',
    advance:'بحث متقدم',
    selectProprty:'اختر نوع العقار',
    areas:'المناطق',
    browse: 'تصفح',
    rent: 'إيجار',
    settle: 'استقر في',
    whatsnew:'إليك ما هو جديد',
    morehere: 'المزيد هنا',
    expolre: 'اكتشف',
    PromoteTitle:'روّج',
    estateToday: 'عقارك اليوم',
    promoteHere: 'روّج هنا',
    learnMore:'اكتشف المزيد',
    KWD:'دينار كويتي',
  },
};

export const combinedTranslations = {
  en: {
     ...componentsTranslations.en,
      ...searchIconTranslations.en,
    // ...advanceFilterTranslations.en,
    // ...authenticationTranslations.en,
    // ...userProfileTranslations.en,
    // ...dashboardTranslations.en,
    // ...submitPropertyTranslations.en,
    // ...propertyListingTranslations.en,
    // ...sideFilterTranslations.en,
    // ...singlePropertyTranslations.en,
    ...common.en
  },
  ar: {
     ...componentsTranslations.ar,
      ...searchIconTranslations.ar,
    // ...advanceFilterTranslations.ar,
    // ...authenticationTranslations.ar,
    // ...userProfileTranslations.ar,
    // ...dashboardTranslations.ar,
    // ...submitPropertyTranslations.ar,
    // ...propertyListingTranslations.ar,
    // ...sideFilterTranslations.ar,
    // ...singlePropertyTranslations.ar,
    ...common.ar
  },
};
