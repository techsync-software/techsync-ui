import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent {
  @Output() closeModal = new EventEmitter<void>();


  socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/techsyncsoft?igsh=dTQ4ODk3amVxMTEz&utm_source=qr',
      icon: 'fa-brands fa-instagram',
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/techsync-software',
      icon: 'fa-brands fa-linkedin-in',
      color: '#0077B5'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/19Sd6AmcS7/?mibextid=LQQJ4d',
      icon: 'fa-brands fa-facebook-f',
      color: '#1877F2'
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/techsyncsoft?s=21&t=oO_pF0gozkIrG2TPikWDzg',
      icon: 'fa-brands fa-x-twitter',
      color: '#000000'
    },
    {
      name: 'Threads',
      url: 'https://www.threads.net/@techsyncsoft?igshid=NTc4MTIwNjQ2YQ==',
      icon: 'fa-brands fa-threads',
      color: '#000000'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@techsyncsoft?_t=ZS-8tP3thWdke2&_r=1',
      icon: 'fa-brands fa-tiktok',
      color: '#000000'
    }
  ];

  onCloseModal() {
    this.closeModal.emit();
  }

  onSocialClick(url: string) {
    window.open(url, '_blank');
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent) {
    this.onCloseModal();
  }
}
