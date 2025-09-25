// PulseNet: AI Powered Disaster Prediction & Response Network - Main Application Controller
// Smart India Hackathon 2025 - Uttarakhand Focus

const DATA_PATH = './data/';

class PulseNetApp {
    constructor() {
        this.currentTab = 'dashboard';
        this.loadingComplete = false;
        this.alertsData = [];
        this.predictionsData = [];
        this.init();
    }

    async init() {
        console.log('🌟 Initializing PulseNet AI System...');
        
        // Initialize loading screen
        this.initLoadingScreen();
        
        // Load all data and AI models
        await this.loadSystemData();
        
        // Initialize UI components
        this.initializeComponents();
        
        // Start real-time monitoring
        this.startRealTimeMonitoring();
        
        console.log('✅ PulseNet System Ready!');
    }

    initLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const app = document.getElementById('app');
        
        // Animate loading stats
        this.animateLoadingStats();
        
        // Simulate AI model loading with realistic progress
        setTimeout(() => {
            this.updateLoadingText('Loading AI Models...');
        }, 1000);
        
        setTimeout(() => {
            this.updateLoadingText('Connecting to Sensors...');
        }, 2000);
        
        setTimeout(() => {
            this.updateLoadingText('Initializing Predictions...');
        }, 3000);
        
        setTimeout(() => {
            this.updateLoadingText('System Ready!');
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                app.classList.add('loaded');
                this.loadingComplete = true;
                this.showWelcomeAlert();
            }, 800);
        }, 4000);
    }

    animateLoadingStats() {
        const stats = document.querySelectorAll('.loading-stats .number');
        stats.forEach(stat => {
            const target = parseInt(stat.dataset.target);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 80);
        });
    }

    updateLoadingText(text) {
        const progressText = document.querySelector('.progress-text');
        if (progressText) {
            progressText.textContent = text;
        }
    }

    async loadSystemData() {
        try {
            // Load data from JSON files
            this.uttarakhandData = await fetch(`${DATA_PATH}uttarakhand-terrain.json`).then(r=>r.json());
            this.timelineData = await fetch(`${DATA_PATH}kedarnath-2013-timeline.json`).then(r=>r.json());
            this.weatherData = await fetch(`${DATA_PATH}weather-patterns.json`).then(r=>r.json());
            this.populationData = await fetch(`${DATA_PATH}population-data.json`).then(r=>r.json());
            this.contactsData = await fetch(`${DATA_PATH}emergency-contacts.json`).then(r=>r.json());
            this.alertsData = await this.loadAlertsData();
            
            console.log('📊 All data loaded successfully');
        } catch (error) {
            console.error('❌ Error loading data:', error);
        }
    }

    async loadAlertsData() {
        // Current active alerts
        return [
            {
                id: 1,
                type: 'landslide',
                severity: 'critical',
                location: 'Kedarnath Valley',
                title: 'Imminent Landslide Warning',
                description: 'Heavy rainfall has destabilized slopes. Landslide probability: 85%. Immediate evacuation recommended.',
                time: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
                affectedPopulation: 2847,
                confidence: 94,
                actions: ['Evacuate immediately', 'Avoid valley roads', 'Move to higher ground']
            },
            {
                id: 2,
                type: 'flood',
                severity: 'high',
                location: 'Alaknanda River Basin',
                title: 'Flash Flood Alert',
                description: 'River water level rising rapidly. Flash flood risk in downstream areas.',
                time: new Date(Date.now() - 25 * 60 * 1000), // 25 minutes ago
                affectedPopulation: 15432,
                confidence: 89,
                actions: ['Monitor water levels', 'Prepare evacuation', 'Secure belongings']
            },
            {
                id: 3,
                type: 'weather',
                severity: 'high',
                location: 'Char Dham Route',
                title: 'Severe Weather Warning',
                description: 'Intense monsoon activity expected. Heavy rainfall and strong winds predicted.',
                time: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
                affectedPopulation: 50000,
                confidence: 91,
                actions: ['Postpone travel', 'Stay indoors', 'Stock emergency supplies']
            }
        ];
    }

    initializeComponents() {
        // Initialize tab switching
        this.setupTabNavigation();
        
        // Initialize emergency alert banner
        this.setupEmergencyBanner();
        
        // Initialize metrics animations
        this.animateMetrics();
        
        // Setup alert system
        this.setupAlertSystem();
        
        // Initialize mobile navigation
        this.setupMobileNavigation();
    }

    setupTabNavigation() {
        const tabButtons = document.querySelectorAll('.tab-btn, .nav-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const tabName = btn.dataset.tab;
                if (tabName) {
                    this.switchTab(tabName);
                }
            });
        });
    }

    switchTab(tabName) {
        // Update active tab buttons
        document.querySelectorAll('.tab-btn, .nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelectorAll(`[data-tab="${tabName}"]`).forEach(btn => {
            btn.classList.add('active');
        });

        // Update content sections
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        const targetContent = document.getElementById(tabName);
        if (targetContent) {
            targetContent.classList.add('active');
        }

        this.currentTab = tabName;
        
        // Load tab-specific content
        this.loadTabContent(tabName);
        
        console.log(`📑 Switched to ${tabName} tab`);
    }

    loadTabContent(tabName) {
        switch (tabName) {
            case 'dashboard':
                this.loadDashboardContent();
                break;
            case 'map':
                this.loadMapContent();
                break;
            case 'kedarnath':
                this.loadKedarnathContent();
                break;
            case 'alerts':
                this.loadAlertsContent();
                break;
            case 'response':
                this.loadResponseContent();
                break;
        }
    }

    loadDashboardContent() {
        // Animate hero metrics
        const metrics = document.querySelectorAll('.metric-value[data-animate]');
        metrics.forEach(metric => {
            const target = parseInt(metric.dataset.animate);
            this.animateNumber(metric, 0, target, 2000);
        });
    }

    loadMapContent() {
        // Initialize Uttarakhand map if not already done
        if (!window.uttarakhandMap) {
            this.initializeUttarakhandMap();
        }
    }

    loadKedarnathContent() {
        // Load Kedarnath timeline if not already loaded
        this.initializeKedarnathTimeline();
    }

    loadAlertsContent() {
        // Populate alerts list
        this.populateAlertsList();
    }

    loadResponseContent() {
        // Load response coordination data
        this.loadResponseData();
    }

    initializeUttarakhandMap() {
        // This would integrate with uttarakhand-map.js
        console.log('🗺️ Initializing Uttarakhand disaster map...');
        // Map initialization will be handled by uttarakhand-map.js
    }

    initializeKedarnathTimeline() {
        // This would integrate with kedarnath-replay.js
        console.log('🏔️ Loading 2013 Kedarnath analysis...');
        // Timeline will be handled by kedarnath-replay.js
    }

    populateAlertsList() {
        const alertsList = document.getElementById('alertsList');
        if (!alertsList) return;

        alertsList.innerHTML = this.alertsData.map(alert => `
            <div class="alert-item ${alert.severity}" data-alert-id="${alert.id}">
                <div class="alert-header">
                    <div class="alert-icon">${this.getAlertIcon(alert.type, alert.severity)}</div>
                    <div class="alert-info">
                        <h4 class="alert-title">${alert.title}</h4>
                        <p class="alert-location">📍 ${alert.location}</p>
                    </div>
                    <div class="alert-meta">
                        <span class="alert-time">${this.formatTimeAgo(alert.time)}</span>
                        <span class="alert-confidence">🎯 ${alert.confidence}%</span>
                    </div>
                </div>
                <div class="alert-body">
                    <p class="alert-description">${alert.description}</p>
                    <div class="alert-stats">
                        <span class="stat">👥 ${alert.affectedPopulation.toLocaleString()} affected</span>
                        <span class="stat">⚠️ ${alert.severity.toUpperCase()} priority</span>
                    </div>
                    <div class="alert-actions-list">
                        <h5>Recommended Actions:</h5>
                        <ul>
                            ${alert.actions.map(action => `<li>${action}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="alert-footer">
                    <button class="action-btn primary" onclick="app.viewAlertDetails(${alert.id})">
                        View Details
                    </button>
                    <button class="action-btn secondary" onclick="app.shareAlert(${alert.id})">
                        Share Alert
                    </button>
                    <button class="action-btn danger" onclick="app.escalateAlert(${alert.id})">
                        Escalate
                    </button>
                </div>
            </div>
        `).join('');
    }

    getAlertIcon(type, severity) {
        const icons = {
            landslide: { critical: '🔴⛰️', high: '🟠⛰️', medium: '🟡⛰️', low: '🟢⛰️' },
            flood: { critical: '🔴🌊', high: '🟠🌊', medium: '🟡🌊', low: '🟢🌊' },
            weather: { critical: '🔴⛈️', high: '🟠⛈️', medium: '🟡⛈️', low: '🟢⛈️' }
        };
        return icons[type]?.[severity] || '⚠️';
    }

    formatTimeAgo(date) {
        const now = new Date();
        const diff = now - date;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(minutes / 60);
        
        if (minutes < 1) return 'Just now';
        if (minutes < 60) return `${minutes} min ago`;
        if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        return date.toLocaleDateString();
    }

    setupEmergencyBanner() {
        const banner = document.getElementById('emergencyBanner');
        
        // Show emergency banner if there are critical alerts
        const criticalAlerts = this.alertsData.filter(alert => alert.severity === 'critical');
        if (criticalAlerts.length > 0 && this.loadingComplete) {
            setTimeout(() => {
                banner.classList.remove('hidden');
                this.playAlertSound();
            }, 2000);
        }
    }

    setupAlertSystem() {
        // Update alert counts in header
        const criticalCount = this.alertsData.filter(a => a.severity === 'critical').length;
        const highCount = this.alertsData.filter(a => a.severity === 'high').length;
        
        document.querySelectorAll('.alert-level.critical .alert-number').forEach(el => {
            el.textContent = criticalCount;
        });
        document.querySelectorAll('.alert-level.high .alert-number').forEach(el => {
            el.textContent = highCount;
        });
        
        // Update navigation badges
        document.querySelectorAll('.nav-badge, .tab-badge').forEach(badge => {
            badge.textContent = criticalCount + highCount;
        });
    }

    setupMobileNavigation() {
        // Mobile-specific touch handling would go here
        console.log('📱 Mobile navigation configured');
    }

    animateMetrics() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    if (element.dataset.animate && !element.classList.contains('animated')) {
                        const target = parseInt(element.dataset.animate);
                        this.animateNumber(element, 0, target, 2000);
                        element.classList.add('animated');
                    }
                }
            });
        });

        document.querySelectorAll('[data-animate]').forEach(el => {
            observer.observe(el);
        });
    }

    animateNumber(element, start, end, duration) {
        const startTime = performance.now();
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            const current = Math.floor(start + (end - start) * this.easeOutCubic(progress));
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }

    easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    startRealTimeMonitoring() {
        // Simulate real-time data updates
        setInterval(() => {
            this.updateRealTimeData();
        }, 30000); // Update every 30 seconds

        console.log('📡 Real-time monitoring started');
    }

    updateRealTimeData() {
        // Simulate slight changes in monitoring data
        const rainfallEl = document.querySelector('.monitor-item .data-value');
        if (rainfallEl) {
            const currentValue = parseInt(rainfallEl.textContent);
            const newValue = currentValue + Math.floor(Math.random() * 10 - 5);
            rainfallEl.textContent = `${Math.max(0, newValue)}mm`;
        }

        // Update timestamps
        document.querySelectorAll('.alert-time').forEach(timeEl => {
            // Time updates would be more sophisticated in real implementation
        });
    }

    showWelcomeAlert() {
        if (!this.loadingComplete) return;
        
        // Show a welcome notification
        this.showNotification('🌟 PulseNet AI System Active', 'Monitoring 500+ villages across Uttarakhand', 'success');
    }

    showNotification(title, message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
            <button class="notification-close" onclick="this.parentElement.remove()">×</button>
        `;
        
        // Add to document
        document.body.appendChild(notification);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 5000);
    }

    playAlertSound() {
        // Create audio context for alert sound
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = 800;
            oscillator.type = 'sine';
            gainNode.gain.value = 0.1;
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (error) {
            console.log('🔇 Audio not available');
        }
    }

    // Public methods for UI interactions
    viewAlertDetails(alertId) {
        const alert = this.alertsData.find(a => a.id === alertId);
        if (alert) {
            console.log('👁️ Viewing alert details:', alert.title);
            // Would open detailed modal
            this.showNotification('Alert Details', `Viewing details for: ${alert.title}`, 'info');
        }
    }

    shareAlert(alertId) {
        const alert = this.alertsData.find(a => a.id === alertId);
        if (alert) {
            console.log('📤 Sharing alert:', alert.title);
            this.showNotification('Alert Shared', 'Alert has been shared with emergency contacts', 'success');
        }
    }

    escalateAlert(alertId) {
        const alert = this.alertsData.find(a => a.id === alertId);
        if (alert) {
            console.log('⬆️ Escalating alert:', alert.title);
            this.showNotification('Alert Escalated', 'Alert escalated to higher authorities', 'warning');
        }
    }

    triggerEmergencyAlert() {
        console.log('🚨 Emergency alert triggered');
        this.showNotification('Emergency Alert Sent', 'Emergency services have been notified', 'critical');
    }

    dismissAlert() {
        const banner = document.getElementById('emergencyBanner');
        if (banner) {
            banner.classList.add('hidden');
        }
    }

    broadcastAlert() {
        console.log('📢 Broadcasting alert to all channels');
        this.showNotification('Alert Broadcast', 'Alert sent via SMS, WhatsApp, and push notifications', 'success');
    }

    exportAlerts() {
        console.log('💾 Exporting alerts data');
        // Would generate and download CSV/PDF
        this.showNotification('Export Complete', 'Alerts data exported successfully', 'success');
    }

    callEmergency(number) {
        console.log(`📞 Initiating emergency call to ${number}`);
        this.showNotification('Emergency Call', `Connecting to ${number}`, 'warning');
        // In real app, would integrate with phone system
    }
}

// Global functions for HTML onclick handlers
function switchTab(tabName) {
    if (window.app) {
        window.app.switchTab(tabName);
    }
}

function triggerEmergencyAlert() {
    if (window.app) {
        window.app.triggerEmergencyAlert();
    }
}

function dismissAlert() {
    if (window.app) {
        window.app.dismissAlert();
    }
}

function showKedarnatDetails() {
    if (window.app) {
        window.app.switchTab('kedarnath');
    }
}

function shareAlert() {
    if (window.app) {
        window.app.showNotification('Alert Shared', 'Emergency alert shared with contacts', 'success');
    }
}

function broadcastAlert() {
    if (window.app) {
        window.app.broadcastAlert();
    }
}

function exportAlerts() {
    if (window.app) {
        window.app.exportAlerts();
    }
}

function callEmergency(number) {
    if (window.app) {
        window.app.callEmergency(number);
    }
}

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new PulseNetApp();
});

// Add notification styles dynamically
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-card, rgba(255, 255, 255, 0.95));
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        padding: 1rem 1.5rem;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(20px);
        z-index: 1001;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
        display: flex;
        align-items: flex-start;
        gap: 1rem;
    }

    .notification.success { border-left: 4px solid var(--safety-green, #00B894); }
    .notification.warning { border-left: 4px solid var(--warning-yellow, #FDCB6E); }
    .notification.critical { border-left: 4px solid var(--critical-red, #E84142); }
    .notification.info { border-left: 4px solid var(--primary-blue, #0A4A99); }

    .notification-content h4 {
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-primary, #1F2937);
    }

    .notification-content p {
        margin: 0;
        font-size: 0.9rem;
        color: var(--text-secondary, #6B7280);
        line-height: 1.4;
    }

    .notification-close {
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        color: var(--text-secondary, #6B7280);
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .notification-close:hover {
        color: var(--text-primary, #1F2937);
    }

    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        .notification {
            top: 10px;
            right: 10px;
            left: 10px;
            max-width: none;
        }
    }
`;

// Inject notification styles
if (!document.getElementById('notification-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'notification-styles';
    styleSheet.textContent = notificationStyles;
    document.head.appendChild(styleSheet);
}

console.log('🌟 PulseNet Main Controller Loaded Successfully!');