// apps/frontend/components/password-change-form.ts

import { AuthService } from '../auth/services/auth-service';
import { PasswordChangeRequest } from '@trans/common-types';

export class PasswordChangeForm {
    private form: HTMLElement;

    constructor(container: HTMLElement) {
        this.form = this.createForm();
        container.appendChild(this.form);
        this.attachEventListeners();
    }

    private createForm(): HTMLElement {
        const formContainer = document.createElement('div');
        formContainer.className = 'password-change-form';

        formContainer.innerHTML = `
            <h3>Change Password</h3>
            <div class="form-group">
                <label for="currentPassword">Current password</label>
                <input type="password" id="currentPassword" name="currentPassword" required>
            </div>
            <div class="form-group">
                <label for="newPassword">New password</label>
                <input type="password" id="newPassword" name="newPassword" required>
                <small>Minimum 8 characters</small>
            </div>
            <div class="form-group">
                <label for="confirmNewPassword">Confirm new password</label>
                <input type="password" id="confirmNewPassword" name="confirmNewPassword" required>
            </div>
            <div class="form-actions">
                <button type="button" id="changePasswordBtn" class="btn-primary">Change Password</button>
                <button type="button" id="cancelBtn" class="btn-secondary">Cancel</button>
            </div>
            <div id="errorMessage" class="error-message" style="display: none;"></div>
            <div id="successMessage" class="success-message" style="display: none;"></div>
        `;

        return formContainer;
    }

    private attachEventListeners(): void {
        const changeBtn = this.form.querySelector('#changePasswordBtn') as HTMLButtonElement;
        const cancelBtn = this.form.querySelector('#cancelBtn') as HTMLButtonElement;

        changeBtn.addEventListener('click', () => this.handlePasswordChange());
        cancelBtn.addEventListener('click', () => this.clearForm());

        this.form.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handlePasswordChange();
            }
        });
    }

    private async handlePasswordChange(): Promise<void> {
        const currentPassword = (this.form.querySelector('#currentPassword') as HTMLInputElement).value;
        const newPassword = (this.form.querySelector('#newPassword') as HTMLInputElement).value;
        const confirmNewPassword = (this.form.querySelector('#confirmNewPassword') as HTMLInputElement).value;

        this.hideMessages();

        const passwordData: PasswordChangeRequest = {
            currentPassword,
            newPassword,
            confirmNewPassword
        };

        const validationError = AuthService.validatePasswordChange(passwordData);
        if (validationError) {
            this.showError(validationError);
            return;
        }

        const changeBtn = this.form.querySelector('#changePasswordBtn') as HTMLButtonElement;
        const originalText = changeBtn.textContent;
        changeBtn.textContent = '변경 중...';
        changeBtn.disabled = true;

        try {
            const result = await AuthService.changePassword(passwordData);

            if (result.success) {
                this.showSuccess(result.message || 'Password changed successfully.');
                this.clearForm();
            } else {
                this.showError(result.error || 'Failed to change password.');
            }
        } catch (error) {
            console.error('Password change error:', error);
            this.showError('An error occurred while changing password.');
        } finally {
            changeBtn.textContent = originalText;
            changeBtn.disabled = false;
        }
    }

    private showError(message: string): void {
        const errorDiv = this.form.querySelector('#errorMessage') as HTMLElement;
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }

    private showSuccess(message: string): void {
        const successDiv = this.form.querySelector('#successMessage') as HTMLElement;
        successDiv.textContent = message;
        successDiv.style.display = 'block';
    }

    private hideMessages(): void {
        const errorDiv = this.form.querySelector('#errorMessage') as HTMLElement;
        const successDiv = this.form.querySelector('#successMessage') as HTMLElement;
        errorDiv.style.display = 'none';
        successDiv.style.display = 'none';
    }

    private clearForm(): void {
        const inputs = this.form.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
        this.hideMessages();
    }
}
