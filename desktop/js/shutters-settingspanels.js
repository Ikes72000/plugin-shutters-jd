/**
 * Display settings panels for eqLogic
 * 
 * @param {object} _eqLogic
 */
function displaySettingsPanels(_eqLogic) {
    var el = $('#settingsPanels');
    el.empty();
    switch (_eqLogic.configuration.eqType) {
        case 'externalConditions':
            
            var div = '<div class="col-lg-10 col-md-9 col-sm-8 eqLogic"';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '</div>';
            break;
    
        case 'heliotropeZone':
            var div = '<div class="col-lg-10 col-md-9 col-sm-8 eqLogic"';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '</div>';
            break;

        case 'shuttersGroup':
            var div = '<div class="col-lg-10 col-md-9 col-sm-8 eqLogic"';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '</div>';
            break;

        case 'shutter':
            var div = '<div class="col-lg-10 col-md-9 col-sm-8 eqLogic"';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '';
            div += '</div>';
            break;

        default:
            break;
    }
    el.append(div);

}

