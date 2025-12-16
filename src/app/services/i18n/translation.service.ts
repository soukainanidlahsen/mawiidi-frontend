import { Injectable, signal, WritableSignal } from '@angular/core';

export type Lang = 'en' | 'fr' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang: WritableSignal<Lang> = signal('en');

  private translations: Record<Lang, Record<string, string>> = {
    en: {
      'login.welcome': 'Welcome Back',
      'login.subtitle': 'Sign in to access your workspace',
      'login.email': 'Email Address',
      'login.password': 'Password',
      'login.signin': 'Sign In',
      'login.register': 'Register here',
      'login.no_account': "Don't have an account?",

      'register.title': 'Create Account',
      'register.subtitle': 'Join Mawiidi today',
      'register.firstName': 'First Name',
      'register.lastName': 'Last Name',
      'register.email': 'Email Address',
      'register.password': 'Password',
      'register.role': 'I am a...',
      'register.patient': 'Patient',
      'register.doctor': 'Doctor',
      'register.submit': 'Create Account',
      'register.loading': 'Creating...',
      'register.hasAccount': 'Already have an account?',
      'register.signin': 'Sign in',

      'common.back': 'Back',

      'dashboard.title': 'Patient Portal',
      'dashboard.welcome': 'Welcome,',
      'dashboard.book': 'Book Appointment',
      'dashboard.appointments': 'My Appointments',
      'dashboard.records': 'Medical Records',
      'dashboard.profile': 'Profile',
      'dashboard.notifications': 'Notifications',
      'dashboard.logout': 'Logout',

      'common.save': 'Save Changes',
      'common.cancel': 'Cancel',
      'common.edit': 'Edit',
      'common.delete': 'Delete',

      // Landing Page
      'landing.slogan': 'Appointments in public hospitals of Morocco',
      'landing.nav.home': 'Home',
      'landing.nav.about': 'About',
      'landing.nav.services': 'Services',
      'landing.nav.doctors': 'Doctors',
      'landing.nav.contact': 'Contact',
      'landing.login': 'Login',

      'landing.hero.tag': 'WELCOME TO MAWIIDI 2',
      'landing.hero.title': 'Book your appointments in public hospitals, easily',
      'landing.hero.subtitle': 'A national platform to facilitate access to care. Patients, doctors, administration: everything is connected.',
      'landing.hero.book': 'Book Appointment',
      'landing.hero.register': 'Register',
      'landing.hero.patient': 'I am a Patient',
      'landing.hero.doctor': 'I am a Doctor',

      'landing.services.title': 'Our Services',
      'landing.services.subtitle': 'Discover specialties available in public hospitals',
      'landing.services.cardio': 'Cardiology',
      'landing.services.cardio.desc': 'Comprehensive care for your heart.',
      'landing.services.neuro': 'Neurology',
      'landing.services.neuro.desc': 'Diagnosis and treatment of nervous disorders.',
      'landing.services.ortho': 'Orthopedics',
      'landing.services.ortho.desc': 'Care for bones and joints.',
      'landing.services.pedia': 'Pediatrics',
      'landing.services.pedia.desc': 'Medical care for children.',
      'landing.services.all': 'View all services',

      'landing.departments.title': 'Our Departments',
      'landing.departments.subtitle': 'Discover the specialties available in public hospitals',
      'landing.departments.view_all': 'View All Departments',
      'landing.dept.cardiology': 'Cardiology',
      'landing.dept.cardiology_desc': 'Comprehensive heart care and treatment.',
      'landing.dept.neurology': 'Neurology',
      'landing.dept.neurology_desc': 'Expert brain and nervous system care.',
      'landing.dept.pediatrics': 'Pediatrics',
      'landing.dept.pediatrics_desc': 'Specialized care for children.',
      'landing.dept.dental': 'Dental Care',
      'landing.dept.dental_desc': 'Complete dental health services.',

      'landing.about.title': 'About Mawiidi 2',
      'landing.about.desc': 'Mawiidi 2 is an initiative of the Ministry of Health to digitize and simplify appointment booking in public hospitals.',
      'landing.about.f1': '24/7 Appointment Booking',
      'landing.about.f2': 'Access to your medical record',
      'landing.about.f3': 'SMS Notifications and Reminders',
      'landing.about.f4': 'Simplified management for doctors',
      'landing.about.more': 'Learn More',

      'landing.footer.desc': 'National appointment platform.',
      'landing.footer.links': 'Quick Links',
      'landing.footer.contact': 'Contact',
      'landing.footer.newsletter': 'Newsletter',
      'landing.footer.subscribe': 'Subscribe',
      'landing.footer.rights': 'All rights reserved.'
    },
    fr: {
      'login.welcome': 'Bon retour',
      'login.subtitle': 'Connectez-vous pour accéder à votre espace',
      'login.email': 'Adresse Email',
      'login.password': 'Mot de passe',
      'login.signin': 'Se connecter',
      'login.register': 'Inscrivez-vous ici',
      'login.no_account': "Vous n'avez pas de compte ?",

      'register.title': 'Créer un Compte',
      'register.subtitle': 'Rejoignez Mawiidi aujourd\'hui',
      'register.firstName': 'Prénom',
      'register.lastName': 'Nom',
      'register.email': 'Adresse Email',
      'register.password': 'Mot de passe',
      'register.role': 'Je suis...',
      'register.patient': 'Patient',
      'register.doctor': 'Médecin',
      'register.submit': 'Créer le Compte',
      'register.loading': 'Création...',
      'register.hasAccount': 'Vous avez déjà un compte ?',
      'register.signin': 'Se connecter',

      'common.back': 'Retour',

      'dashboard.title': 'Portail Patient',
      'dashboard.welcome': 'Bienvenue,',
      'dashboard.book': 'Prendre Rendez-vous',
      'dashboard.appointments': 'Mes Rendez-vous',
      'dashboard.records': 'Dossiers Médicaux',
      'dashboard.profile': 'Profil',
      'dashboard.notifications': 'Notifications',
      'dashboard.logout': 'Déconnexion',

      'common.save': 'Enregistrer',
      'common.cancel': 'Annuler',
      'common.edit': 'Modifier',
      'common.delete': 'Supprimer',

      // Landing Page
      'landing.slogan': 'Rendez-vous dans les hôpitaux publics du Maroc',
      'landing.nav.home': 'Accueil',
      'landing.nav.about': 'À propos',
      'landing.nav.services': 'Services',
      'landing.nav.doctors': 'Médecins',
      'landing.nav.contact': 'Contact',
      'landing.login': 'Se connecter',

      'landing.hero.tag': 'BIENVENUE SUR MAWIIDI 2',
      'landing.hero.title': 'Prenez vos rendez-vous dans les hôpitaux publics, en toute simplicité',
      'landing.hero.subtitle': 'Une plateforme nationale pour faciliter l\'accès aux soins. Patients, médecins, administration : tout est connecté.',
      'landing.hero.book': 'Prendre Rendez-vous',
      'landing.hero.register': 'S\'inscrire',
      'landing.hero.patient': 'Je suis Patient',
      'landing.hero.doctor': 'Je suis Médecin',

      'landing.services.title': 'Nos Services',
      'landing.services.subtitle': 'Découvrez les spécialités disponibles dans les hôpitaux publics',
      'landing.services.cardio': 'Cardiologie',
      'landing.services.cardio.desc': 'Soins complets pour votre cœur.',
      'landing.services.neuro': 'Neurologie',
      'landing.services.neuro.desc': 'Diagnostic et traitement des troubles nerveux.',
      'landing.services.ortho': 'Orthopédie',
      'landing.services.ortho.desc': 'Soins des os et des articulations.',
      'landing.services.pedia': 'Pédiatrie',
      'landing.services.pedia.desc': 'Soins médicaux pour les enfants.',
      'landing.services.all': 'Voir tous les services',

      'landing.departments.title': 'Nos Départements',
      'landing.departments.subtitle': 'Découvrez les spécialités disponibles dans les hôpitaux publics',
      'landing.departments.view_all': 'Voir Tous les Départements',
      'landing.dept.cardiology': 'Cardiologie',
      'landing.dept.cardiology_desc': 'Soins cardiaques complets.',
      'landing.dept.neurology': 'Neurologie',
      'landing.dept.neurology_desc': 'Soins experts du cerveau et du système nerveux.',
      'landing.dept.pediatrics': 'Pédiatrie',
      'landing.dept.pediatrics_desc': 'Soins spécialisés pour les enfants.',
      'landing.dept.dental': 'Soins Dentaires',
      'landing.dept.dental_desc': 'Services complets de santé dentaire.',

      'landing.about.title': 'À Propos de Mawiidi 2',
      'landing.about.desc': 'Mawiidi 2 est une initiative du Ministère de la Santé pour digitaliser et simplifier la prise de rendez-vous dans les hôpitaux publics.',
      'landing.about.f1': 'Prise de rendez-vous 24/7',
      'landing.about.f2': 'Accès à votre dossier médical',
      'landing.about.f3': 'Notifications et rappels SMS',
      'landing.about.f4': 'Gestion simplifiée pour les médecins',
      'landing.about.more': 'En savoir plus',

      'landing.footer.desc': 'Plateforme nationale de rendez-vous.',
      'landing.footer.links': 'Liens Rapides',
      'landing.footer.contact': 'Contact',
      'landing.footer.newsletter': 'Newsletter',
      'landing.footer.subscribe': 'S\'abonner',
      'landing.footer.rights': 'Tous droits réservés.'
    },
    ar: {
      'login.welcome': 'مرحباً بعودتكم',
      'login.subtitle': 'سجل الدخول للوصول إلى مساحتك',
      'login.email': 'البريد الإلكتروني',
      'login.password': 'كلمة المرور',
      'login.signin': 'تسجيل الدخول',
      'login.register': 'سجل هنا',
      'login.no_account': 'ليس لديك حساب؟',

      'register.title': 'إنشاء حساب',
      'register.subtitle': 'انضم إلى موعدي اليوم',
      'register.firstName': 'الاسم الأول',
      'register.lastName': 'اسم العائلة',
      'register.email': 'البريد الإلكتروني',
      'register.password': 'كلمة المرور',
      'register.role': 'أنا...',
      'register.patient': 'مريض',
      'register.doctor': 'طبيب',
      'register.submit': 'إنشاء الحساب',
      'register.loading': 'جاري الإنشاء...',
      'register.hasAccount': 'لديك حساب بالفعل؟',
      'register.signin': 'تسجيل الدخول',

      'common.back': 'رجوع',

      'dashboard.title': 'بوابة المريض',
      'dashboard.welcome': 'مرحباً،',
      'dashboard.book': 'حجز موعد',
      'dashboard.appointments': 'مواعيدي',
      'dashboard.records': 'السجلات الطبية',
      'dashboard.profile': 'الملف الشخصي',
      'dashboard.notifications': 'الإشعارات',
      'dashboard.logout': 'تسجيل الخروج',

      'common.save': 'حفظ التغييرات',
      'common.cancel': 'إلغاء',
      'common.edit': 'تعديل',
      'common.delete': 'حذف',

      // Landing Page
      'landing.slogan': 'مواعيد في المستشفيات العامة بالمغرب',
      'landing.nav.home': 'الرئيسية',
      'landing.nav.about': 'من نحن',
      'landing.nav.services': 'الخدمات',
      'landing.nav.doctors': 'الأطباء',
      'landing.nav.contact': 'اتصل بنا',
      'landing.login': 'تسجيل الدخول',

      'landing.hero.tag': 'مرحباً بكم في موعدي 2',
      'landing.hero.title': 'احجز مواعيدك في المستشفيات العامة بكل سهولة',
      'landing.hero.subtitle': 'منصة وطنية لتسهيل الوصول إلى الرعاية الصحية. المرضى، الأطباء، الإدارة: الكل متصل.',
      'landing.hero.book': 'احجز موعد',
      'landing.hero.register': 'سجل الآن',
      'landing.hero.patient': 'أنا مريض',
      'landing.hero.doctor': 'أنا طبيب',

      'landing.services.title': 'خدماتنا',
      'landing.services.subtitle': 'اكتشف التخصصات المتاحة في المستشفيات العامة',
      'landing.services.cardio': 'طب القلب',
      'landing.services.cardio.desc': 'رعاية شاملة لقلبك.',
      'landing.services.neuro': 'طب الأعصاب',
      'landing.services.neuro.desc': 'تشخيص وعلاج الاضطرابات العصبية.',
      'landing.services.ortho': 'جراحة العظام',
      'landing.services.ortho.desc': 'رعاية العظام والمفاصل.',
      'landing.services.pedia': 'طب الأطفال',
      'landing.services.pedia.desc': 'رعاية طبية للأطفال.',
      'landing.services.all': 'عرض جميع الخدمات',

      'landing.departments.title': 'أقسامنا',
      'landing.departments.subtitle': 'اكتشف التخصصات المتاحة في المستشفيات العامة',
      'landing.departments.view_all': 'عرض جميع الأقسام',
      'landing.dept.cardiology': 'طب القلب',
      'landing.dept.cardiology_desc': 'رعاية شاملة للقلب.',
      'landing.dept.neurology': 'طب الأعصاب',
      'landing.dept.neurology_desc': 'رعاية متخصصة للدماغ والجهاز العصبي.',
      'landing.dept.pediatrics': 'طب الأطفال',
      'landing.dept.pediatrics_desc': 'رعاية متخصصة للأطفال.',
      'landing.dept.dental': 'طب الأسنان',
      'landing.dept.dental_desc': 'خدمات صحة الأسنان الكاملة.',

      'landing.about.title': 'عن موعدي 2',
      'landing.about.desc': 'موعدي 2 هي مبادرة من وزارة الصحة لرقمنة وتبسيط حجز المواعيد في المستشفيات العامة.',
      'landing.about.f1': 'حجز مواعيد 24/7',
      'landing.about.f2': 'الوصول إلى ملفك الطبي',
      'landing.about.f3': 'إشعارات وتذكيرات عبر الرسائل القصيرة',
      'landing.about.f4': 'إدارة مبسطة للأطباء',
      'landing.about.more': 'اقرأ المزيد',

      'landing.footer.desc': 'المنصة الوطنية للمواعيد.',
      'landing.footer.links': 'روابط سريعة',
      'landing.footer.contact': 'اتصل بنا',
      'landing.footer.newsletter': 'النشرة الإخبارية',
      'landing.footer.subscribe': 'اشترك',
      'landing.footer.rights': 'جميع الحقوق محفوظة.'
    }
  };

  constructor() {
    // Check local storage or browser lang
    const savedLang = localStorage.getItem('lang') as Lang;
    if (savedLang && ['en', 'fr', 'ar'].includes(savedLang)) {
      this.setLanguage(savedLang);
    }
  }

  setLanguage(lang: Lang) {
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);

    // Handle RTL for Arabic
    if (lang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', lang);
    }
  }

  getCurrentLang() {
    return this.currentLang();
  }

  translate(key: string): string {
    const lang = this.currentLang();
    return this.translations[lang][key] || key;
  }
}
