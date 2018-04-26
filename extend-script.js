window.$('.action-panels').addClass('communication-sidebar-expanded')
window.$('.interaction-scripts-btn').click()

var inactiveButton = window.$('.interaction-scripts-btn.enabled:not(.selected)')

var interactionContent = window.$('.interaction-content.non-call-script.vertical-script')
var scriptContainer = interactionContent.find('.interaction-script-container')
var scriptCurrentWidth = scriptContainer.css('width')

if (parseInt(scriptCurrentWidth, 10) > 400) {
  if (inactiveButton) {
    scriptContainer.css('width', '60%')
    interactionContent.css('width', 'calc(100% - ' + scriptContainer.css('width') + ')')
  } else {
    scriptContainer.css('width', '400px')
    interactionContent.css('width', 'calc(100% - 400px)')
  }
} else {
  scriptContainer.css('width', '60%')
  interactionContent.css('width', 'calc(100% - ' + scriptContainer.css('width') + ')')
}
