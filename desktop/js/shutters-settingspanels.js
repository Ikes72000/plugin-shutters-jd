/**
 * Display settings panels for eqLogic
 * 
 * @param {object} _eqLogic
 */
function displaySettingsPanels(_eqLogic) {
    var el = $('#settingsPanels');
    el.empty();
    switch (_eqLogic.configuration.eqLogicType) {
        case 'externalConditions':
            
            var div = '<div>';
            div += '<ul class="nav nav-tabs">';
            div += '<li class="active">';
            div += '<a href="#primaryConditionsTab" data-toggle="tab"><i class="fas fa-tasks"></i> {{Conditions primaires}}</a>';
            div += '</li>';
            div += '<li>';
            div += '<a href="#secondaryConditionsTab" data-toggle="tab"><i class="fas fa-tasks"></i> {{Conditions secondaires}}</a>';
            div += '</li>';
            div += '</ul>';
            div += '<div class="tab-content" style="height:calc(100% - 50px);overflow:auto;overflow-x: hidden;">';
            div += '<div class="tab-pane active" id="primaryConditionsTab">';
            div += '</div>';
            div += '<div class="tab-pane" id="secondaryConditionsTab">';
            div += '</div>';
            div += '</div>';
            div += '</div>';
            break;
    
        case 'heliotropeZone':
            var div = '<div class="col-lg-10 col-md-9 col-sm-8 eqLogic" style="border-left: solid 1px #EEE; padding-left: 25px;display: none;">';
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
            var div = '<div class="col-lg-10 col-md-9 col-sm-8 eqLogic" style="border-left: solid 1px #EEE; padding-left: 25px;display: none;">';
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
            var div = '<div class="col-lg-10 col-md-9 col-sm-8 eqLogic" style="border-left: solid 1px #EEE; padding-left: 25px;display: none;">';
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

