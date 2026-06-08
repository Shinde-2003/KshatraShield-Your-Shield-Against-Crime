from flask import Blueprint, render_template

pages_bp = Blueprint('pages', __name__)

@pages_bp.route('/')
def home():
    return render_template('index.html')

@pages_bp.route('/register')
def register_page():
    return render_template('register.html')

@pages_bp.route('/login')
def login_page():
    return render_template('login.html')

@pages_bp.route('/report-crime')
def report_crime_page():
    return render_template('report_crime.html')

@pages_bp.route('/live-capture')
def live_capture_page():
    return render_template('live_capture.html')

@pages_bp.route('/e-fir')
def e_fir_page():
    return render_template('e_fir.html')

@pages_bp.route('/e-nc')
def e_nc_page():
    return render_template('e_nc.html')

@pages_bp.route('/anonymous-report')
def anonymous_report_page():
    return render_template('anonymous_report.html')

@pages_bp.route('/my-reports')
def my_reports_page():
    return render_template('my_reports.html')

@pages_bp.route('/crime-analysis')
def crime_analysis_page():
    return render_template('crime_analysis.html')

@pages_bp.route('/emergency')
def emergency_page():
    return render_template('emergency.html')

@pages_bp.route('/police/login')
def police_login_page():
    return render_template('police/login.html')

@pages_bp.route('/police/dashboard')
def police_dashboard_page():
    return render_template('police/dashboard.html')
