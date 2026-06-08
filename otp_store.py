"""
Mock OTP Store
In-memory OTP storage for development.
In production, this would use Redis or SMS gateway.
"""

import random
import time

# In-memory store: { email: { 'otp': '123456', 'expires': timestamp } }
_otp_store = {}

MOCK_OTP = '123456'  # Fixed OTP for development/testing


def generate_otp(email, use_mock=True):
    """Generate and store an OTP for the given email."""
    if use_mock:
        otp = MOCK_OTP
    else:
        otp = str(random.randint(100000, 999999))

    _otp_store[email] = {
        'otp': otp,
        'expires': time.time() + 300  # 5 minutes expiry
    }
    return otp


def verify_otp(email, otp):
    """Verify the OTP for the given email."""
    if email not in _otp_store:
        return False

    stored = _otp_store[email]

    # Check expiry
    if time.time() > stored['expires']:
        del _otp_store[email]
        return False

    # Check OTP
    if stored['otp'] == otp:
        del _otp_store[email]
        return True

    return False
