// PulseNet: AI Powered Disaster Prediction & Response Network - Main Application Controller
// Smart India Hackathon 2025 - Uttarakhand Focus

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
            // Simulate loading different data sources
            this.uttarakhandData = await this.loadUttarakhandData();
            this.weatherData = await this.loadWeatherData();
            this.historicalData = await this.loadHistoricalData();
            this.kedarnathtimelineData = await this.loadKedarnathTimelineData();
            this.alertsData = await this.loadAlertsData();
            
            console.log('📊 All data loaded successfully');
        } catch (error) {
            console.error('❌ Error loading data:', error);
        }
    }

    async loadUttarakhandData() {
        // Synthetic Uttarakhand terrain and village data
        return {
            villages: [
                { name: 'Kedarnath', lat: 30.7346, lng: 79.0669, population: 1500, riskLevel: 'critical', elevation: 3583 },
                { name: 'Badrinath', lat: 30.7433, lng: 79.4938, population: 2000, riskLevel: 'high', elevation: 3133 },
                { name: 'Gangotri', lat: 30.9993, lng: 78.9411, population: 1200, riskLevel: 'high', elevation: 3100 },
                { name: 'Yamunotri', lat: 31.0118, lng: 78.4270, population: 800, riskLevel: 'medium', elevation: 3293 },
                { name: 'Hemkund', lat: 30.7268, lng: 79.6634, population: 500, riskLevel: 'critical', elevation: 4329 },
                { name: 'Govindghat', lat: 30.7176, lng: 79.6341, population: 3000, riskLevel: 'high', elevation: 1828 },
                { name: 'Joshimath', lat: 30.5553, lng: 79.5601, population: 8000, riskLevel: 'medium', elevation: 1890 },
                { name: 'Rishikesh', lat: 30.0869, lng: 78.2676, population: 102138, riskLevel: 'low', elevation: 372 },
                { name: 'Haridwar', lat: 29.9457, lng: 78.1642, population: 228832, riskLevel: 'low', elevation: 314 },
                { name: 'Dehradun', lat: 30.3165, lng: 78.0322, population: 578420, riskLevel: 'low', elevation: 640 }
            ],
            rivers: [
                { name: 'Alaknanda', coordinates: [[30.2000, 79.0000], [30.3000, 79.1000], [30.4000, 79.2000]] },
                { name: 'Mandakini', coordinates: [[30.7000, 79.0000], [30.6000, 79.1000], [30.5000, 79.2000]] },
                { name: 'Bhagirathi', coordinates: [[31.0000, 78.9000], [30.9000, 79.0000], [30.8000, 79.1000]] }
            ]
        };
    }

    async loadWeatherData() {
        // Synthetic real-time weather data
        return {
            current: {
                temperature: 18.5,
                humidity: 87,
                rainfall: 127,
                windSpeed: 45,
                pressure: 1012.3,
                visibility: 2.1
            },
            forecast: [
                { day: 0, rainfall: 127, risk: 'critical', confidence: 94 },
                { day: 1, rainfall: 89, risk: 'high', confidence: 91 },
                { day: 2, rainfall: 156, risk: 'critical', confidence: 96 },
                { day: 3, rainfall: 78, risk: 'medium', confidence: 88 },
                { day: 4, rainfall: 45, risk: 'low', confidence: 85 },
                { day: 5, rainfall: 23, risk: 'low', confidence: 82 },
                { day: 6, rainfall: 67, risk: 'medium', confidence: 89 }
            ]
        };
    }

    async loadHistoricalData() {
        // Historical disaster data for trend analysis
        return {
            disasters: [
                { date: '2013-06-16', type: 'flood', severity: 'critical', casualties: 5700, location: 'Kedarnath' },
                { date: '2016-09-18', type: 'landslide', severity: 'high', casualties: 47, location: 'Chamoli' },
                { date: '2021-02-07', type: 'avalanche', severity: 'critical', casualties: 204, location: 'Chamoli' },
                { date: '2022-10-19', type: 'landslide', severity: 'medium', casualties: 12, location: 'Uttarkashi' }
            ]
        };
    }

    async loadKedarnathTimelineData() {
        // Detailed 2013 Kedarnath timeline data
        return {
            realityTimeline: [
                { time: '2013-06-15 18:00', event: 'Heavy monsoon clouds gathering', impact: 'Low visibility, no alerts issued' },
                { time: '2013-06-16 06:00', event: 'Intense rainfall begins', impact: '30mm/hour, pilgrims continue journey' },
                { time: '2013-06-16 12:00', event: 'Cloudburst occurs', impact: '75mm/hour, flash floods begin' },
                { time: '2013-06-16 14:30', event: 'Landslides start', impact: 'Roads blocked, communication cut' },
                { time: '2013-06-16 16:00', event: 'Major flood wave', impact: 'Kedarnath temple area flooded' },
                { time: '2013-06-17 06:00', event: 'Rescue operations begin', impact: 'Air rescue limited due to weather' },
                { time: '2013-06-17 18:00', event: 'Extent of damage realized', impact: '5,700+ casualties confirmed' }
            ],
            pulsenetTimeline: [
                { time: '2013-06-15 12:00', event: 'AI detects extreme weather pattern', impact: '⚠️ Early warning issued to all agencies' },
                { time: '2013-06-15 18:00', event: 'Landslide probability reaches 85%', impact: '🚨 Mass evacuation alerts sent' },
                { time: '2013-06-16 00:00', event: 'Systematic evacuation begins', impact: '✅ 90% of pilgrims moved to safety' },
                { time: '2013-06-16 06:00', event: 'Flash flood prediction confirmed', impact: '✅ Valley cleared, rescue teams positioned' },
                { time: '2013-06-16 12:00', event: 'Cloudburst tracked in real-time', impact: '✅ No casualties, infrastructure protected' },
                { time: '2013-06-16 16:00', event: 'Damage assessment via AI', impact: '✅ Economic loss reduced by 70%' },
                { time: '2013-06-17 06:00', event: 'Recovery operations optimized', impact: '✅ Normal operations resumed in 48 hours' }
            ],
            impactComparison: {
                lives: { reality: 5700, pulsenet: 500, improvement: 91 },
                economic: { reality: 12000, pulsenet: 3500, improvement: 71 },
                displaced: { reality: 110000, pulsenet: 45000, improvement: 59 },
                responseTime: { reality: 48, pulsenet: 4, improvement: 92 }
            }
        };
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