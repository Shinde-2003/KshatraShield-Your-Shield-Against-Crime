// KshatraShield Main JavaScript

const translations = {
    en: {
        // Navigation & Banner
        home: "Home",
        emergency_lbl: "EMERGENCY:",
        police: "POLICE (100)",
        ambulance: "AMBULANCE (108)",
        fire: "FIRE (101)",
        welcome: "Welcome",
        logout: "Logout",
        login_btn: "Login",
        
        // Home Page
        title: "KshatraShield",
        slogan: "Your Shield Against Crime",
        report_crime: "Report Crime",
        feature_report_p: "File a standard police complaint with evidence.",
        live_capture: "Live Crime Capture",
        feature_live_p: "Capture real-time video, image, or audio.",
        e_fir: "E-FIR",
        feature_fir_p: "Electronic First Information Report system.",
        e_nc: "E-NC",
        feature_nc_p: "Report Non-Cognizable offenses online.",
        anonymous: "Report Anonymously",
        feature_anon_p: "Report harassment or abuse without identity.",
        my_reports: "My Reports",
        feature_my_p: "Track status and updates on your complaints.",
        analysis: "Crime Analysis",
        feature_analysis_p: "View AI-powered crime trends and heatmaps.",
        emergency: "Emergency Services",
        feature_emergency_p: "Quick access to police, ambulance, and fire.",
        news: "KshatraShield: Safe City Initiative launched. | Report any suspicious activity immediately. | Dial 100 for immediate help.",

        // Report Crime Page
        report_title: "Report a Crime",
        provide_details: "Please provide accurate details of the incident. Your report will be analyzed by AI and forwarded to the local police department.",
        incident_title: "Incident Title",
        placeholder_title: "e.g. Phone snatching at Main Street",
        detailed_description: "Detailed Description",
        placeholder_desc: "Describe what happened, who was involved, any identifying marks...",
        location_lbl: "Location",
        placeholder_loc: "Enter area or detect location",
        report_type_lbl: "Report Type",
        standard_report: "Standard Report",
        e_fir_full: "E-FIR (Legal Complaint)",
        e_nc_full: "E-NC (Non-Cognizable)",
        e_fir_title: "Online First Information Report (E-FIR)",
        e_nc_title: "Non-Cognizable Report (E-NC)",
        anon_report_title: "Anonymous Crime Report",
        attach_evidence_lbl: "Attach Evidence",
        images_video_pdf: "Images / Video / PDF",
        voice_audio: "Voice / Audio Recording",
        submit_btn: "Submit Report to KshatraShield",

        // My Reports Page
        my_reports_title: "My Crime Reports",
        track_progress: "Track the progress of your submitted complaints.",
        loading: "Loading your reports...",
        no_reports: "No reports found.",
        view_updates: "View Updates",
        complaint_details: "Complaint Details",

        // Crime Analysis Page
        crime_by_cat: "Crime by Category",
        priority_dist: "Priority Distribution",
        ai_sentiment: "AI Sentiment Activity",
        safety_index: "Overall City Safety Index: 8.2 / 10 (Steady)",

        // Emergency Page
        emergency_assistance: "Emergency Assistance",
        emergency_desc: "In case of immediate danger, use the buttons below to contact emergency services.",
        police_h3: "POLICE",
        police_desc: "For immediate police assistance or to report ongoing crime.",
        call_100: "Call 100",
        ambulance_h3: "AMBULANCE",
        ambulance_desc: "For medical emergencies and urgent health concerns.",
        call_108: "Call 108",
        fire_h3: "FIRE BRIGADE",
        fire_desc: "For fire incidents, gas leaks, or rescue operations.",
        call_101: "Call 101",
        women_helpline_h3: "WOMEN HELPLINE",
        women_helpline_desc: "Safety and assistance for women in distress.",
        call_1091: "Call 1091",
        nearby_contacts: "Nearby Emergency Contacts",

        // Auth Pages (Login)
        user_login: "User Login",
        email_addr: "Email Address",
        placeholder_email: "email@example.com",
        password_lbl: "Password",
        placeholder_pass: "Enter your password",
        continue_otp: "Continue to Secure OTP",
        verify_otp: "Verify OTP",
        otp_msg: "A 6-digit code has been sent to your registered number:",
        enter_otp: "Enter 6-digit OTP",
        verify_login_btn: "Verify & Login",
        no_account: "Don't have an account?",
        register_here: "Register here",

        // Auth Pages (Register)
        register_title: "Join KshatraShield",
        full_name: "Full Name",
        placeholder_name: "Enter your full name",
        phone_num: "Phone Number",
        placeholder_phone: "+91 XXXX XXX XXX",
        placeholder_pass_create: "Create a strong password",
        id_proof_type: "ID Proof Type",
        aadhaar: "Aadhaar Card",
        pan: "PAN Card",
        voter_id: "Voter ID",
        passport: "Passport",
        id_number: "ID Number",
        placeholder_id: "Enter ID number",
        police_code_lbl: "Police Admin Code (Optional)",
        placeholder_police_code: "Enter only if registering as Police",
        register_btn: "Create Account",
        already_account: "Already have an account?",
        login_here: "Login here",

        // Live Capture Page
        live_capture_desc: "Securely capture and upload real-time evidence directly to KshatraShield.",
        photo_btn: "Photo",
        record_btn: "Record",
        stop_btn: "Stop",
        captured_evidence: "Captured Evidence",
        capture_desc_lbl: "Capture Description",
        placeholder_capture_title: "e.g. Video of theft in progress",
        location_auto: "Location (Auto-detected)",
        detecting_placeholder: "Detecting...",
        upload_btn: "Upload to Reports",

        // Police Dashboard
        police_dash_title: "Live Monitoring Dashboard",
        refresh_btn: "Refresh",
        exit_btn: "Exit",
        all_statuses: "All Statuses",
        all_priorities: "All Priorities",
        pending: "Pending",
        in_progress: "In Progress",
        resolved: "Resolved",
        critical: "Critical",
        high: "High",
        medium: "Medium",
        low: "Low",
        placeholder_area: "Filter by Area",
        apply_filters: "Apply Filters",
        id_header: "ID",
        incident_header: "Incident",
        ai_cat_header: "AI Category",
        priority_header: "Priority",
        reporter_header: "Reporter",
        status_header: "Status",
        action_header: "Action",
        update_btn: "Update",
        media_btn: "Media",
        update_status_title: "Update Status",
        new_status_lbl: "New Status",
        officer_comment_lbl: "Officer Comment",
        placeholder_comment: "Action taken or reason for update",
        cancel_btn: "Cancel",
        total_lbl: "Total",
        loading_complaints: "Loading incoming complaints...",
        
        // Crime Categories
        theft: "Theft",
        murder: "Murder",
        robbery: "Robbery",
        violence: "Violence",
        harassment: "Harassment",
        cybercrime: "Cybercrime",
        accident: "Accident",
        other: "Other"
    },
    hi: {
        // Navigation & Banner
        home: "होम",
        emergency_lbl: "आपातकालीन:",
        police: "पुलिस (100)",
        ambulance: "एम्बुलेंस (108)",
        fire: "दमकल (101)",
        welcome: "स्वागत है",
        logout: "लॉगआउट",
        login_btn: "लॉगिन",

        // Home Page
        title: "क्षत्रशील्ड",
        slogan: "अपराध के खिलाफ आपका कवच",
        report_crime: "रिपोर्ट अपराध",
        feature_report_p: "सबूतों के साथ मानक पुलिस शिकायत दर्ज करें।",
        live_capture: "लाइव अपराध कैप्चर",
        feature_live_p: "वास्तविक समय वीडियो, चित्र या ऑडियो कैप्चर करें।",
        e_fir: "ई-एफआईआर",
        feature_fir_p: "इलेक्ट्रॉनिक प्रथम सूचना रिपोर्ट प्रणाली।",
        e_nc: "ई-एनसी",
        feature_nc_p: "असंज्ञेय अपराधों की ऑनलाइन रिपोर्ट करें।",
        anonymous: "गुमनाम रिपोर्ट",
        feature_anon_p: "बिना पहचान के उत्पीड़न या दुर्व्यवहार की रिपोर्ट करें।",
        my_reports: "मेरी रिपोर्ट",
        feature_my_p: "अपनी शिकायतों की स्थिति और अपडेट ट्रैक करें।",
        analysis: "अपराध विश्लेषण",
        feature_analysis_p: "AI-संचालित अपराध रुझान और हीटमैप देखें।",
        emergency: "आपातकालीन सेवाएं",
        feature_emergency_p: "पुलिस, एम्बुलेंस और दमकल तक त्वरित पहुंच।",
        news: "क्षत्रशील्ड: सुरक्षित शहर पहल शुरू की गई। | किसी भी संदिग्ध गतिविधि की तुरंत रिपोर्ट करें। | तत्काल सहायता के लिए 100 डायल करें।",

        // Report Crime Page
        report_title: "अपराध की रिपोर्ट करें",
        provide_details: "कृपया घटना का सटीक विवरण प्रदान करें। आपकी रिपोर्ट का AI द्वारा विश्लेषण किया जाएगा और स्थानीय पुलिस विभाग को भेजा जाएगा।",
        incident_title: "घटना का शीर्षक",
        placeholder_title: "जैसे: मुख्य सड़क पर फोन छीनना",
        detailed_description: "विस्तृत विवरण",
        placeholder_desc: "क्या हुआ, कौन शामिल था, कोई पहचान चिह्न...",
        location_lbl: "स्थान",
        placeholder_loc: "क्षेत्र दर्ज करें या स्थान का पता लगाएं",
        report_type_lbl: "रिपोर्ट प्रकार",
        standard_report: "मानक रिपोर्ट",
        e_fir_full: "ई-एफआईआर (कानूनी शिकायत)",
        e_nc_full: "ई-एनसी (असंज्ञेय)",
        e_fir_title: "ऑनलाइन प्रथम सूचना रिपोर्ट (ई-एफआईआर)",
        e_nc_title: "असंज्ञेय रिपोर्ट (ई-एनसी)",
        anon_report_title: "गुमनाम अपराध रिपोर्ट",
        attach_evidence_lbl: "सबूत संलग्न करें",
        images_video_pdf: "चित्र / वीडियो / पीडीएफ",
        voice_audio: "आवाज / ऑडियो रिकॉर्डिंग",
        submit_btn: "क्षत्रशील्ड को रिपोर्ट सबमिट करें",

        // My Reports Page
        my_reports_title: "मेरे अपराध रिपोर्ट",
        track_progress: "अपनी शिकायतों की प्रगति को ट्रैक करें।",
        loading: "आपकी रिपोर्ट लोड हो रही है...",
        no_reports: "कोई रिपोर्ट नहीं मिली।",
        view_updates: "अपडेट देखें",
        complaint_details: "शिकायत का विवरण",

        // Crime Analysis Page
        crime_by_cat: "श्रेणी के अनुसार अपराध",
        priority_dist: "प्राथमिकता वितरण",
        ai_sentiment: "AI भावना गतिविधि",
        safety_index: "कुल शहर सुरक्षा सूचकांक: 8.2 / 10 (स्थिर)",

        // Emergency Page
        emergency_assistance: "आपातकालीन सहायता",
        emergency_desc: "तत्काल खतरे के मामले में, आपातकालीन सेवाओं से संपर्क करने के लिए नीचे दिए गए बटनों का उपयोग करें।",
        police_h3: "पुलिस",
        police_desc: "तत्काल पुलिस सहायता या चल रहे अपराध की रिपोर्ट करने के लिए।",
        call_100: "100 पर कॉल करें",
        ambulance_h3: "एम्बुलेंस",
        ambulance_desc: "चिकित्सा आपात स्थिति और तत्काल स्वास्थ्य संबंधी चिंताओं के लिए।",
        call_108: "108 पर कॉल करें",
        fire_h3: "दमकल विभाग",
        fire_desc: "आगजनी, गैस रिसाव या बचाव अभियान के लिए।",
        call_101: "101 पर कॉल करें",
        women_helpline_h3: "महिला हेल्पलाइन",
        women_helpline_desc: "संकट में महिलाओं के लिए सुरक्षा और सहायता।",
        call_1091: "1091 पर कॉल करें",
        nearby_contacts: "निकटतम आपातकालीन संपर्क",

        // Auth Pages (Login)
        user_login: "उपयोगकर्ता लॉगिन",
        email_addr: "ईमेल पता",
        placeholder_email: "email@example.com",
        password_lbl: "पासवर्ड",
        placeholder_pass: "अपना पासवर्ड दर्ज करें",
        continue_otp: "सुरक्षित ओटीपी के लिए जारी रखें",
        verify_otp: "ओटीपी सत्यापित करें",
        otp_msg: "आपके पंजीकृत नंबर पर 6 अंकों का कोड भेजा गया है:",
        enter_otp: "6 अंकों का ओटीपी दर्ज करें",
        verify_login_btn: "सत्यापित करें और लॉगिन करें",
        no_account: "खाता नहीं है?",
        register_here: "यहाँ पंजीकरण करें",

        // Auth Pages (Register)
        register_title: "क्षत्रशील्ड में शामिल हों",
        full_name: "पूरा नाम",
        placeholder_name: "अपना पूरा नाम दर्ज करें",
        phone_num: "फ़ोन नंबर",
        placeholder_phone: "+91 XXXX XXX XXX",
        placeholder_pass_create: "एक मजबूत पासवर्ड बनाएँ",
        id_proof_type: "आईडी प्रमाण प्रकार",
        aadhaar: "आधार कार्ड",
        pan: "पैन कार्ड",
        voter_id: "वोटर आईडी",
        passport: "पासपोर्ट",
        id_number: "आईडी नंबर",
        placeholder_id: "आईडी नंबर दर्ज करें",
        police_code_lbl: "पुलिस एडमिन कोड (वैकल्पिक)",
        placeholder_police_code: "केवल तभी दर्ज करें जब पुलिस के रूप में पंजीकरण कर रहे हों",
        register_btn: "खाता बनाएँ",
        already_account: "पहले से ही एक खाता है?",
        login_here: "यहाँ लॉगिन करें",

        // Live Capture Page
        live_capture_desc: "क्षत्रशील्ड पर सीधे वास्तविक समय के सबूत सुरक्षित रूप से कैप्चर और अपलोड करें।",
        photo_btn: "फोटो",
        record_btn: "रिकॉर्ड करें",
        stop_btn: "रुकें",
        captured_evidence: "कैप्चर किए गए सबूत",
        capture_desc_lbl: "कैप्चर विवरण",
        placeholder_capture_title: "जैसे: चोरी का वीडियो",
        location_auto: "स्थान (स्वतः पता लगाया गया)",
        detecting_placeholder: "पता लगा रहे हैं...",
        upload_btn: "रिपोर्ट में अपलोड करें",

        // Police Dashboard
        police_dash_title: "लाइव मॉनिटरिंग डैशबोर्ड",
        refresh_btn: "ताज़ा करें",
        exit_btn: "बाहर निकलें",
        all_statuses: "सभी स्थितियाँ",
        all_priorities: "सभी प्राथमिकताएं",
        pending: "लंबित",
        in_progress: "प्रगति पर",
        resolved: "हल किया गया",
        critical: "गंभीर",
        high: "उच्च",
        medium: "मध्यम",
        low: "कम",
        placeholder_area: "क्षेत्र द्वारा फ़िल्टर करें",
        apply_filters: "फ़िल्टर लागू करें",
        id_header: "आईडी",
        incident_header: "घटना",
        ai_cat_header: "एआई श्रेणी",
        priority_header: "प्राथमिकता",
        reporter_header: "रिपोर्टर",
        status_header: "स्थिति",
        action_header: "कार्रवाई",
        update_btn: "अपडेट करें",
        media_btn: "मीडिया",
        update_status_title: "स्थिति अपडेट करें",
        new_status_lbl: "नई स्थिति",
        officer_comment_lbl: "अधिकारी की टिप्पणी",
        placeholder_comment: "की गई कार्रवाई या अपडेट का कारण",
        cancel_btn: "रद्द करें",
        total_lbl: "कुल",
        loading_complaints: "आने वाली शिकायतों को लोड किया जा रहा है...",

        // Crime Categories
        theft: "चोरी",
        murder: "हत्या",
        robbery: "डकैती",
        violence: "हिंसा",
        harassment: "उत्पीड़न",
        cybercrime: "साइबर अपराध",
        accident: "दुर्घटना",
        other: "अन्य"
    },
    mr: {
        // Navigation & Banner
        home: "होम",
        emergency_lbl: "आणीबाणी:",
        police: "पोलीस (100)",
        ambulance: "रुग्णवाहिका (108)",
        fire: "अग्निशमन (101)",
        welcome: "स्वागत आहे",
        logout: "लॉगआउट",
        login_btn: "लॉगिन",

        // Home Page
        title: "क्षत्रशील्ड",
        slogan: "गुन्ह्याविरुद्ध तुमचे कवच",
        report_crime: "गुन्ह्याची नोंद करा",
        feature_report_p: "पुराव्यासह मानक पोलीस तक्रार दाखल करा।",
        live_capture: "थेट गुन्हा कॅप्चर",
        feature_live_p: "रिअल-टाइम व्हिडिओ, प्रतिमा किंवा ऑडिओ कॅप्चर करा।",
        e_fir: "ई-एफआयआर",
        feature_fir_p: "इलेक्ट्रॉनिक प्रथम माहिती अहवाल प्रणाली।",
        e_nc: "ई-एनसी",
        feature_nc_p: "अ-दखलपात्र गुन्ह्यांची ऑनलाइन तक्रार करा।",
        anonymous: "अनामित अहवाल",
        feature_anon_p: "ओळख उघड न करता छळ किंवा गैरवर्तनाची तक्रार करा।",
        my_reports: "माझे अहवाल",
        feature_my_p: "तुमच्या तक्रारींची स्थिती आणि अपडेट्सचा मागोवा घ्या।",
        analysis: "गुन्हेगारी विश्लेषण",
        feature_analysis_p: "AI-आधारित गुन्हेगारी कल आणि हीटमॅप पहा।",
        emergency: "आणीबाणी सेवा",
        feature_emergency_p: "पोलीस, रुग्णवाहिका आणि अग्निशमन दलाशी त्वरित संपर्क।",
        news: "क्षत्रशील्ड: सुरक्षित शहर उपक्रम सुरू झाला. | कोणत्याही संशयास्पद हालचालीची त्वरित नोंद करा. | तात्काळ मदतीसाठी 100 डायल करा।",

        // Report Crime Page
        report_title: "गुन्ह्याची नोंद करा",
        provide_details: "कृपया घटनेचा अचूक तपशील द्या. तुमचा अहवाल AI द्वारे विश्लेषित केला जाईल आणि स्थानिक पोलीस विभागाकडे पाठविला जाईल।",
        incident_title: "घटनेचे शीर्षक",
        placeholder_title: "उदा. मुख्य रस्त्यावर फोन हिसकावणे",
        detailed_description: "तपशीलवार वर्णन",
        placeholder_desc: "काय घडले, कोण सामील होते, काही ओळख खुणा...",
        location_lbl: "स्थान",
        placeholder_loc: "क्षेत्र प्रविष्ट करा किंवा स्थान शोधा",
        report_type_lbl: "अहवाल प्रकार",
        standard_report: "मानक अहवाल",
        e_fir_full: "ई-एफआयआर (कायदेशीर तक्रार)",
        e_nc_full: "ई-एनसी (अ-दखलपात्र)",
        e_fir_title: "ऑनलाइन प्रथम माहिती अहवाल (ई-एफआयआर)",
        e_nc_title: "अ-दखलपात्र अहवाल (ई-एनसी)",
        anon_report_title: "अनामित गुन्हे अहवाल",
        attach_evidence_lbl: "पुरावे जोडा",
        images_video_pdf: "प्रतिमा / व्हिडिओ / पीडीएफ",
        voice_audio: "आवाज / ऑडिओ रेकॉर्डिंग",
        submit_btn: "क्षत्रशील्डकडे अहवाल सादर करा",

        // My Reports Page
        my_reports_title: "माझे गुन्हे अहवाल",
        track_progress: "तुमच्या सादर केलेल्या तक्रारींच्या प्रगतीचा मागोवा घ्या।",
        loading: "तुमचे अहवाल लोड होत आहेत...",
        no_reports: "कोणतेही अहवाल आढळले नाहीत।",
        view_updates: "अपडेट पहा",
        complaint_details: "तक्रारीचा तपशील",

        // Crime Analysis Page
        crime_by_cat: "श्रेणीनुसार गुन्हा",
        priority_dist: "प्राधान्य वितरण",
        ai_sentiment: "AI भावना कृती",
        safety_index: "एकूण शहर सुरक्षा निर्देशांक: 8.2 / 10 (स्थिर)",

        // Emergency Page
        emergency_assistance: "आणीबाणी मदत",
        emergency_desc: "तातडीच्या धोक्याच्या प्रसंगी, आणीबाणी सेवांशी संपर्क साधण्यासाठी खालील बटणे वापरा।",
        police_h3: "पोलीस",
        police_desc: "तातडीची पोलीस मदत किंवा चालू असलेल्या गुन्ह्याची नोंद करण्यासाठी।",
        call_100: "100 वर कॉल करा",
        ambulance_h3: "रुग्णवाहिका",
        ambulance_desc: "वैद्यकीय आणीबाणी आणि तातडीच्या आरोग्य समस्यांसाठी।",
        call_108: "108 वर कॉल करा",
        fire_h3: "अग्निशमन दल",
        fire_desc: "आगीच्या घटना, गॅस गळती किंवा बचाव कार्यासाठी।",
        call_101: "101 वर कॉल करा",
        women_helpline_h3: "महिला हेल्पलाइन",
        women_helpline_desc: "संकटात असलेल्या महिलांसाठी सुरक्षा आणि मदत।",
        call_1091: "1091 वर कॉल करा",
        nearby_contacts: "जवळचे आणीबाणी संपर्क",

        // Auth Pages (Login)
        user_login: "वापरकर्ता लॉगिन",
        email_addr: "ईमेल पत्ता",
        placeholder_email: "email@example.com",
        password_lbl: "पासवर्ड",
        placeholder_pass: "तुमचा पासवर्ड प्रविष्ट करा",
        continue_otp: "सुरक्षित ओटीपीसाठी पुढे जा",
        verify_otp: "ओटीपी सत्यापित करा",
        otp_msg: "तुमच्या नोंदणीकृत क्रमांकावर ६-अंकी कोड पाठवला गेला आहे:",
        enter_otp: "६-अंकी ओटीपी प्रविष्ट करा",
        verify_login_btn: "सत्यापित करा आणि लॉगिन करा",
        no_account: "खाते नाही?",
        register_here: "येथे नोंदणी करा",

        // Auth Pages (Register)
        register_title: "क्षत्रशील्डमध्ये सामील व्हा",
        full_name: "पूर्ण नाव",
        placeholder_name: "तुमचे पूर्ण नाव प्रविष्ट करा",
        phone_num: "फोन नंबर",
        placeholder_phone: "+91 XXXX XXX XXX",
        placeholder_pass_create: "एक मजबूत पासवर्ड तयार करा",
        id_proof_type: "ओळख पुरावा प्रकार",
        aadhaar: "आधार कार्ड",
        pan: "पॅन कार्ड",
        voter_id: "मतदार ओळखपत्र",
        passport: "पासपोर्ट",
        id_number: "आयडी नंबर",
        placeholder_id: "आयडी नंबर प्रविष्ट करा",
        police_code_lbl: "पोलीस एडमिन कोड (पर्यायी)",
        placeholder_police_code: "केवळ पोलीस म्हणून नोंदणी करत असल्यास प्रविष्ट करा",
        register_btn: "खाते तयार करा",
        already_account: "आधीच खाते आहे?",
        login_here: "येथे लॉगिन करा",

        // Live Capture Page
        live_capture_desc: "क्षत्रशील्डवर थेट पुरावे सुरक्षितपणे कॅप्चर आणि अपलोड करा।",
        photo_btn: "फोटो",
        record_btn: "रेकॉर्ड करा",
        stop_btn: "थांबा",
        captured_evidence: "मिळालेले पुरावे",
        capture_desc_lbl: "कॅप्चर वर्णन",
        placeholder_capture_title: "उदा. चोरीचा व्हिडिओ",
        location_auto: "स्थान (स्वयंचलित)",
        detecting_placeholder: "शोधत आहे...",
        upload_btn: "रिपोर्टमध्ये अपलोड करा",

        // Police Dashboard
        police_dash_title: "लाईव्ह मॉनिटरिंग डॅशबोर्ड",
        refresh_btn: "रिफ्रेश करा",
        exit_btn: "बाहेर पडा",
        all_statuses: "सर्व स्थिती",
        all_priorities: "सर्व प्राधान्यक्रम",
        pending: "प्रलंबित",
        in_progress: "प्रगतीपथावर",
        resolved: "सोडवले",
        critical: "गंभीर",
        high: "उच्च",
        medium: "मध्यम",
        low: "कमी",
        placeholder_area: "क्षेत्रानुसार फिल्टर करा",
        apply_filters: "फिल्टर लागू करा",
        id_header: "आयडी",
        incident_header: "घटना",
        ai_cat_header: "एआय श्रेणी",
        priority_header: "प्राधान्य",
        reporter_header: "रिपोर्टर",
        status_header: "स्थिती",
        action_header: "कार्रवाई",
        update_btn: "अपडेट करा",
        media_btn: "मीडिया",
        update_status_title: "स्थिती अपडेट करा",
        new_status_lbl: "नवीन स्थिती",
        officer_comment_lbl: "अधिकारी टिप्पणी",
        placeholder_comment: "केलेली कारवाई किंवा अपडेटचे कारण",
        cancel_btn: "रद्द करा",
        total_lbl: "एकूण",
        loading_complaints: "येणाऱ्या तक्रारी लोड होत आहेत...",

        // Crime Categories
        theft: "चोरी",
        murder: "हत्या",
        robbery: "दरोडा",
        violence: "हिंसा",
        harassment: "छळ",
        cybercrime: "सायबर गुन्हे",
        accident: "अपघात",
        other: "इतर"
    }
};

// State
let currentLang = localStorage.getItem('ks_lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ks_lang', lang);
    updateUI();
    window.dispatchEvent(new Event('languageChanged'));
}

function updateUI() {
    const t = translations[currentLang];
    
    // Update language selector dropdown
    const select = document.getElementById('lang-select');
    if (select) select.value = currentLang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                // Special handling for "Welcome, [User]"
                if (key === 'welcome' && el.innerText.includes(',')) {
                    const userName = el.innerText.split(',')[1].trim();
                    el.innerText = `${t[key]}, ${userName}`;
                } else {
                    el.innerText = t[key];
                }
            }
        }
    });
}

// Auth Helpers
function getToken() {
    return localStorage.getItem('ks_token');
}

function isLoggedIn() {
    return !!getToken();
}

function logout() {
    localStorage.removeItem('ks_token');
    localStorage.removeItem('ks_user_role');
    localStorage.removeItem('ks_user_name');
    window.location.href = '/login';
}

function notify(message, type = 'info') {
    const container = document.getElementById('notifications-container');
    const note = document.createElement('div');
    note.className = `notification ${type}`;
    note.innerText = message;
    container.appendChild(note);
    setTimeout(() => note.remove(), 5000);
}

// Maps Helper
function getMapLink(location) {
    if (!location) return "#";
    // Check if it's coordinates: "GPS: 12.3456, 78.9012"
    const coordsMatch = location.match(/GPS:?\s*([-+]?\d+\.\d+),\s*([-+]?\d+\.\d+)/);
    if (coordsMatch) {
        const lat = coordsMatch[1];
        const lon = coordsMatch[2];
        return `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
    }
    // Otherwise fallback to search
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
}

// App Init
// Initialize translations
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    
    // Auth display logic
    const authLinks = document.getElementById('auth-links');
    if (authLinks) {
        if (isLoggedIn()) {
            const name = localStorage.getItem('ks_user_name') || 'User';
            const role = localStorage.getItem('ks_user_role');
            authLinks.innerHTML = `
                <li><span data-i18n="welcome">Welcome, ${name}</span></li>
                <li><a href="#" onclick="logout()" data-i18n="logout">Logout</a></li>
            `;
            
            // Show My Reports nav link if user
            if (role === 'user') {
                const myReportsNav = document.getElementById('my-reports-nav');
                if (myReportsNav) myReportsNav.style.display = 'block';
            }
            updateUI(); // Re-run to translate the "Welcome" part
        }
    }
});
