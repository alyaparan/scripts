// ==UserScript==
// @name         Tanki Online Advanced Control Mod
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Advanced client-side control and testing mod for Tanki Online
// @author       Alik Paranyan | @alyaparan
// @match        https://tankionline.com/play*
// @match        https://*.tankionline.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        menuKey: 'Insert',
        menuPosition: { x: 100, y: 100 },
        menuWidth: 300,
        menuHeight: 400,
        menuBackground: 'rgba(0, 0, 0, 0.8)',
        menuBorder: '2px solid #00ff00',
        textColor: '#00ff00',
        highlightColor: '#ffff00'
    };

    // State management
    let modEnabled = true;
    let menuVisible = false;
    let gameObjects = {};
    let interceptors = {};

    // Feature toggles
    const features = {
        godMode: false,
        unlimitedAmmo: false,
        speedBoost: false,
        autoAim: false,
        esp: false,
        noRecoil: false,
        radar: false,
        xRay: false,
        autoFire: false,
        instantRespawn: false
    };

    // Create mod menu
    function createMenu() {
        const menu = document.createElement('div');
        menu.id = 'advancedControlMenu';
        menu.style.position = 'fixed';
        menu.style.top = `${CONFIG.menuPosition.y}px`;
        menu.style.left = `${CONFIG.menuPosition.x}px`;
        menu.style.width = `${CONFIG.menuWidth}px`;
        menu.style.height = `${CONFIG.menuHeight}px`;
        menu.style.backgroundColor = CONFIG.menuBackground;
        menu.style.border = CONFIG.menuBorder;
        menu.style.color = CONFIG.textColor;
        menu.style.zIndex = '9999';
        menu.style.padding = '10px';
        menu.style.fontFamily = 'Arial, sans-serif';
        menu.style.display = 'none';
        menu.style.overflow = 'auto';
        menu.style.borderRadius = '5px';
        menu.style.boxShadow = '0 0 10px rgba(0, 255, 0, 0.5)';

        // Menu header
        const header = document.createElement('div');
        header.textContent = 'Advanced Control Mod v1.0';
        header.style.textAlign = 'center';
        header.style.fontWeight = 'bold';
        header.style.marginBottom = '10px';
        header.style.paddingBottom = '5px';
        header.style.borderBottom = '1px solid #00ff00';
        header.style.cursor = 'move';
        menu.appendChild(header);

        // Feature toggles
        const featureList = document.createElement('div');
        featureList.id = 'featureList';
        menu.appendChild(featureList);

        // Add features to menu
        for (const [feature, enabled] of Object.entries(features)) {
            const featureItem = document.createElement('div');
            featureItem.style.marginBottom = '5px';
            featureItem.style.padding = '5px';
            featureItem.style.borderRadius = '3px';
            featureItem.style.backgroundColor = enabled ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = enabled;
            checkbox.style.marginRight = '10px';
            checkbox.addEventListener('change', () => {
                features[feature] = checkbox.checked;
                featureItem.style.backgroundColor = checkbox.checked ? 
                    'rgba(0, 255, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)';
                toggleFeature(feature, checkbox.checked);
            });
            
            const label = document.createElement('label');
            label.textContent = formatFeatureName(feature);
            label.style.cursor = 'pointer';
            
            featureItem.appendChild(checkbox);
            featureItem.appendChild(label);
            featureList.appendChild(featureItem);
        }

        // Status display
        const statusDiv = document.createElement('div');
        statusDiv.id = 'modStatus';
        statusDiv.textContent = 'Mod: ACTIVE';
        statusDiv.style.marginTop = '10px';
        statusDiv.style.padding = '5px';
        statusDiv.style.textAlign = 'center';
        statusDiv.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
        statusDiv.style.borderRadius = '3px';
        menu.appendChild(statusDiv);

        // Add menu to document
        document.body.appendChild(menu);

        // Make menu draggable
        let isDragging = false;
        let dragOffset = { x: 0, y: 0 };

        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            dragOffset.x = e.clientX - menu.offsetLeft;
            dragOffset.y = e.clientY - menu.offsetTop;
            menu.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                menu.style.left = `${e.clientX - dragOffset.x}px`;
                menu.style.top = `${e.clientY - dragOffset.y}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            menu.style.cursor = 'default';
        });

        return menu;
    }

    // Format feature name for display
    function formatFeatureName(feature) {
        return feature.replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase());
    }

    // Toggle specific feature
    function toggleFeature(feature, enabled) {
        switch(feature) {
            case 'godMode':
                if (enabled) enableGodMode();
                else disableGodMode();
                break;
            case 'unlimitedAmmo':
                if (enabled) enableUnlimitedAmmo();
                else disableUnlimitedAmmo();
                break;
            case 'speedBoost':
                if (enabled) enableSpeedBoost();
                else disableSpeedBoost();
                break;
            case 'autoAim':
                if (enabled) enableAutoAim();
                else disableAutoAim();
                break;
            case 'esp':
                if (enabled) enableESP();
                else disableESP();
                break;
            case 'noRecoil':
                if (enabled) enableNoRecoil();
                else disableNoRecoil();
                break;
            case 'radar':
                if (enabled) enableRadar();
                else disableRadar();
                break;
            case 'xRay':
                if (enabled) enableXRay();
                else disableXRay();
                break;
            case 'autoFire':
                if (enabled) enableAutoFire();
                else disableAutoFire();
                break;
            case 'instantRespawn':
                if (enabled) enableInstantRespawn();
                else disableInstantRespawn();
                break;
        }
    }

    // Feature implementations
    function enableGodMode() {
        interceptors.damage = interceptFunction('applyDamage', (originalFn, ...args) => {
            if (args[0] && args[0].isPlayer) {
                console.log('[MOD] God mode prevented damage');
                return false; // Prevent damage
            }
            return originalFn(...args);
        });
    }

    function disableGodMode() {
        if (interceptors.damage) {
            interceptors.damage.restore();
            delete interceptors.damage;
        }
    }

    function enableUnlimitedAmmo() {
        interceptors.ammo = interceptFunction('decreaseAmmo', (originalFn, ...args) => {
            console.log('[MOD] Unlimited ammo enabled');
            return false; // Prevent ammo decrease
        });
    }

    function disableUnlimitedAmmo() {
        if (interceptors.ammo) {
            interceptors.ammo.restore();
            delete interceptors.ammo;
        }
    }

    function enableSpeedBoost() {
        interceptors.movement = interceptFunction('updateMovement', (originalFn, ...args) => {
            // Apply 2x speed multiplier
            if (args[0] && args[0].isPlayer) {
                args[0].speed *= 2;
            }
            return originalFn(...args);
        });
    }

    function disableSpeedBoost() {
        if (interceptors.movement) {
            interceptors.movement.restore();
            delete interceptors.movement;
        }
    }

    function enableAutoAim() {
        // This would automatically aim at the nearest enemy
        const autoAimInterval = setInterval(() => {
            if (gameObjects.player && gameObjects.enemies && gameObjects.enemies.length > 0) {
                const player = gameObjects.player;
                const nearestEnemy = findNearestEnemy(player, gameObjects.enemies);
                
                if (nearestEnemy) {
                    const dx = nearestEnemy.x - player.x;
                    const dy = nearestEnemy.y - player.y;
                    const angle = Math.atan2(dy, dx);
                    
                    // Set player's aim angle
                    if (player.setAimAngle) {
                        player.setAimAngle(angle);
                    }
                }
            }
        }, 100);
        
        interceptors.autoAim = { interval: autoAimInterval };
    }

    function disableAutoAim() {
        if (interceptors.autoAim && interceptors.autoAim.interval) {
            clearInterval(interceptors.autoAim.interval);
            delete interceptors.autoAim;
        }
    }

    function enableESP() {
        // Enhanced Sight Perception - draw boxes around enemies
        interceptors.rendering = interceptFunction('renderGame', (originalFn, ...args) => {
            const result = originalFn(...args);
            
            if (features.esp && gameObjects.enemies) {
                const ctx = args[0]; // Assuming first arg is canvas context
                gameObjects.enemies.forEach(enemy => {
                    ctx.strokeStyle = CONFIG.highlightColor;
                    ctx.lineWidth = 2;
                    ctx.strokeRect(enemy.x - enemy.width/2, enemy.y - enemy.height/2, 
                                  enemy.width, enemy.height);
                    
                    // Draw health bar
                    ctx.fillStyle = 'red';
                    ctx.fillRect(enemy.x - enemy.width/2, enemy.y - enemy.height/2 - 10, 
                                enemy.width, 5);
                    
                    ctx.fillStyle = 'green';
                    ctx.fillRect(enemy.x - enemy.width/2, enemy.y - enemy.height/2 - 10, 
                                enemy.width * (enemy.health / enemy.maxHealth), 5);
                });
            }
            
            return result;
        });
    }

    function disableESP() {
        if (interceptors.rendering) {
            interceptors.rendering.restore();
            delete interceptors.rendering;
        }
    }

    function enableNoRecoil() {
        interceptors.recoil = interceptFunction('applyRecoil', (originalFn, ...args) => {
            console.log('[MOD] No recoil enabled');
            return false; // Prevent recoil
        });
    }

    function disableNoRecoil() {
        if (interceptors.recoil) {
            interceptors.recoil.restore();
            delete interceptors.recoil;
        }
    }

    function enableRadar() {
        const radar = document.createElement('div');
        radar.id = 'modRadar';
        radar.style.position = 'fixed';
        radar.style.bottom = '20px';
        radar.style.right = '20px';
        radar.style.width = '150px';
        radar.style.height = '150px';
        radar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        radar.style.border = '2px solid #00ff00';
        radar.style.borderRadius = '50%';
        radar.style.zIndex = '9998';
        document.body.appendChild(radar);
        
        interceptors.radar = { element: radar };
    }

    function disableRadar() {
        if (interceptors.radar && interceptors.radar.element) {
            interceptors.radar.element.remove();
            delete interceptors.radar;
        }
    }

    function enableXRay() {
        interceptors.visibility = interceptFunction('isVisible', (originalFn, ...args) => {
            // Make everything visible
            return true;
        });
    }

    function disableXRay() {
        if (interceptors.visibility) {
            interceptors.visibility.restore();
            delete interceptors.visibility;
        }
    }

    function enableAutoFire() {
        interceptors.shooting = setInterval(() => {
            if (gameObjects.player && gameObjects.player.fire) {
                gameObjects.player.fire();
            }
        }, 100);
    }

    function disableAutoFire() {
        if (interceptors.shooting) {
            clearInterval(interceptors.shooting);
            delete interceptors.shooting;
        }
    }

    function enableInstantRespawn() {
        interceptors.respawn = interceptFunction('onDeath', (originalFn, ...args) => {
            console.log('[MOD] Instant respawn triggered');
            // Call original function then immediately respawn
            const result = originalFn(...args);
            if (gameObjects.player && gameObjects.player.respawn) {
                setTimeout(() => gameObjects.player.respawn(), 100);
            }
            return result;
        });
    }

    function disableInstantRespawn() {
        if (interceptors.respawn) {
            interceptors.respawn.restore();
            delete interceptors.respawn;
        }
    }

    // Utility functions
    function interceptFunction(functionName, wrapper) {
        // This would need to be adapted based on the game's actual structure
        // For demonstration, we assume functions are in window.game namespace
        if (window.game && window.game[functionName]) {
            const original = window.game[functionName];
            window.game[functionName] = function(...args) {
                return wrapper(original, ...args);
            };
            
            return {
                restore: () => {
                    window.game[functionName] = original;
                }
            };
        }
        return null;
    }

    function findNearestEnemy(player, enemies) {
        let nearest = null;
        let minDistance = Infinity;
        
        enemies.forEach(enemy => {
            const dx = enemy.x - player.x;
            const dy = enemy.y - player.y;
            const distance = Math.sqrt(dx*dx + dy*dy);
            
            if (distance < minDistance) {
                minDistance = distance;
                nearest = enemy;
            }
        });
        
        return nearest;
    }

    function scanForGameObjects() {
        // This function would need to be implemented based on the game's structure
        // For demonstration, we'll use a placeholder
        setInterval(() => {
            if (window.game) {
                gameObjects.player = window.game.player || {};
                gameObjects.enemies = window.game.enemies || [];
            }
        }, 1000);
    }

    // Initialize the mod
    function initMod() {
        console.log('[MOD] Advanced Control Mod initializing...');
        
        // Create menu
        const menu = createMenu();
        
        // Set up key listener to toggle menu
        document.addEventListener('keydown', (e) => {
            if (e.key === CONFIG.menuKey) {
                menuVisible = !menuVisible;
                menu.style.display = menuVisible ? 'block' : 'none';
            }
            
            // Quick enable/disable mod
            if (e.ctrlKey && e.key === 'm') {
                modEnabled = !modEnabled;
                const status = document.getElementById('modStatus');
                if (status) {
                    status.textContent = `Mod: ${modEnabled ? 'ACTIVE' : 'INACTIVE'}`;
                    status.style.backgroundColor = modEnabled ? 
                        'rgba(0, 255, 0, 0.2)' : 'rgba(255, 0, 0, 0.2)';
                }
            }
        });
        
        // Start scanning for game objects
        scanForGameObjects();
        
        console.log('[MOD] Advanced Control Mod initialized. Press Insert to open menu.');
    }

    // Wait for page to load before initializing
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMod);
    } else {
        initMod();
    }
})();
