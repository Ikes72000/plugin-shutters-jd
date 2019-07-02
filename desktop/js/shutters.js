/*
 * This file is part of the NextDom software (https://github.com/NextDom or http://nextdom.github.io).
 * Copyright (c) 2018 NextDom.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 2.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

 /**
  * Print eqLogic (core function)
  * 
  * @param {object} _eqLogic 
  */
function printEqLogic(_eqLogic) {
    
    console.log('function printEqLogic()');

    if (!isset(_eqLogic)) {
        var _eqLogic = {configuration: {}};
    }
    
    if (!isset(_eqLogic.configuration)) {
        _eqLogic.configuration = {};
    }

    //Disable the choice of equipment type
    if ($('[data-l1key=configuration][data-l2key=eqLogicType]').val() !== null) {
        $('[data-l1key=configuration][data-l2key=eqLogicType]').attr('disabled', true);
    } else {
        $('[data-l1key=configuration][data-l2key=eqLogicType]').attr('disabled', false);
    }

    switch(_eqLogic.configuration.eqLogicType) {
        case 'externalConditions':
            initExternalConditionsViewEvents();
            break;
        case 'heliotropeZone':
            break;
        case 'shuttersGroup':
            break;
        case 'shutter':
            break;
        default:
            break;
    }

    //Display settings panels for selected eqLogic 
    displaySettingsPanels(_eqLogic.configuration.eqLogicType);

    //Update display of eqLogic settings
    $('#settingsTab').setValues(_eqLogic, '.eqLogicAttr'); 


}
