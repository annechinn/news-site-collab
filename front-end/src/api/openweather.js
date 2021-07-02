import axios from 'axios';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather/'
const API_KEY = "5aacfde4f7d201a4132c4fca06ac2702";

const svgIcons = {
  cloudy:
    'M0 20.328q0-2.484 1.547-4.414t3.969-2.477q0.641-2.938 2.969-4.805t5.359-1.867q2.953 0 5.273 1.82t3.008 4.664h0.453q2.938 0 5.016 2.070t2.078 5.008-2.078 5.023-5.016 2.086h-15.469q-1.438 0-2.758-0.563t-2.273-1.516-1.516-2.273-0.563-2.758zM2.422 20.328q0 1.906 1.375 3.273t3.313 1.367h15.469q1.938 0 3.313-1.367t1.375-3.273-1.375-3.266-3.313-1.359h-2.313q-0.25 0-0.25-0.25l-0.109-0.813q-0.25-2.359-1.977-3.914t-4.086-1.555-4.102 1.563-1.961 3.906l-0.109 0.703q0 0.25-0.266 0.25l-0.75 0.109q-1.797 0.156-3.016 1.484t-1.219 3.141zM17.172 5.797q-0.25 0.234 0.125 0.344 1.078 0.469 1.797 0.922 0.281 0.078 0.375-0.047 1.516-1.438 3.531-1.438t3.492 1.352 1.648 3.336l0.156 1.063h2.359q1.625 0 2.797 1.164t1.172 2.773q0 1.5-1.031 2.609t-2.547 1.281q-0.25 0-0.25 0.266v1.891q0 0.266 0.25 0.266 2.516-0.156 4.25-1.984t1.734-4.328q0-2.641-1.867-4.508t-4.508-1.867h-0.25q-0.656-2.5-2.742-4.117t-4.664-1.617q-3.531 0-5.828 2.641z',
  fog:
    'M0 26.078q0-0.609 0.422-1.016t1.047-0.406h31.109q0.625 0 1.023 0.398t0.398 1.023q0 0.578-0.414 0.969t-1.008 0.391h-31.109q-0.625 0-1.047-0.391t-0.422-0.969zM4.359 20.844q0-0.609 0.438-1 0.375-0.375 0.984-0.375h31.125q0.578 0 0.969 0.398t0.391 0.977q0 0.594-0.391 1.008t-0.969 0.414h-31.125q-0.594 0-1.008-0.422t-0.414-1zM4.578 16.875q0 0.219 0.25 0.219h2.391q0.156 0 0.328-0.266 0.594-1.297 1.773-2.125t2.586-0.938l0.922-0.125q0.281 0 0.281-0.297l0.109-0.828q0.266-2.703 2.289-4.508t4.742-1.805q2.703 0 4.711 1.781t2.289 4.469l0.125 0.953q0 0.281 0.328 0.281h2.656q1.609 0 2.93 0.859t1.961 2.281q0.172 0.266 0.344 0.266h2.391q0.297 0 0.234-0.375-0.734-2.563-2.906-4.188t-4.953-1.625h-0.531q-0.828-3.328-3.492-5.445t-6.086-2.117q-3.5 0-6.219 2.195t-3.484 5.602q-2.125 0.5-3.727 2.016t-2.227 3.625v-0.063q-0.016 0.047-0.016 0.156zM7.266 31.188q0-0.594 0.438-0.984 0.375-0.375 1-0.375h31.141q0.594 0 1.008 0.391t0.414 0.969q0 0.594-0.422 1.016t-1 0.422h-31.141q-0.578 0-1.008-0.43t-0.43-1.008z',
  hail:
    'M0 19.219q0 2.797 1.633 4.977t4.258 2.977q0.219 0.047 0.406-0.125l1.938-2.391q-2.219 0-3.797-1.594t-1.578-3.844q0-2.109 1.406-3.664t3.5-1.727l0.875-0.109q0.266 0 0.266-0.219l0.125-0.922q0.313-2.75 2.32-4.555t4.742-1.805q2.75 0 4.789 1.82t2.289 4.539l0.125 0.969q0.063 0.281 0.359 0.281h2.703q2.25 0 3.828 1.578t1.578 3.813q0 2.078-1.406 3.633t-3.453 1.805q-0.297 0-0.813 0.094-0.484 0.047-0.688 0.375l-3.938 4.656q-0.359 0.453-0.273 1.047t0.523 0.953q0.266 0.313 0.938 0.313 0.656 0 1.016-0.578l3.531-4.063q3.109-0.313 5.25-2.688t2.141-5.547q0-1.688-0.648-3.219t-1.75-2.633-2.625-1.758-3.211-0.656h-0.531q-0.828-3.313-3.539-5.43t-6.195-2.117q-2.328 0-4.383 0.992t-3.461 2.766-1.891 4.039q-2.813 0.625-4.586 2.867t-1.773 5.148zM5.641 32.578q0 0.156 0.094 0.5 0.219 0.531 0.734 0.734 0.547 0.25 1.109 0.031t0.766-0.75q0.25-0.547 0.031-1.078t-0.766-0.719q-0.563-0.266-1.078-0.047t-0.766 0.781q-0.125 0.266-0.125 0.547zM8.719 28.516v0.172q0.047 0.563 0.5 0.938 0.563 0.313 1.031 0.313 0.563 0 1.016-0.547l3.875-4.609q0.359-0.438 0.328-1.094-0.063-0.531-0.461-0.891t-0.867-0.359q-0.141 0-0.234 0.016-0.578 0.109-0.938 0.547l-3.938 4.625q-0.313 0.359-0.313 0.891zM10 36.375q0 0.297 0.125 0.531 0.203 0.531 0.734 0.781 0.266 0.125 0.547 0.125 0.313 0 0.516-0.125 0.578-0.234 0.781-0.688 0.25-0.547 0.039-1.109t-0.742-0.766q-0.547-0.25-1.117-0.031t-0.758 0.75q-0.125 0.234-0.125 0.531zM12.781 32.469v0.188q0.063 0.547 0.516 0.914t0.922 0.367q0.563 0 1.047-0.547l7.25-8.734q0.281-0.313 0.281-0.859v-0.203q-0.063-0.563-0.453-0.891t-0.875-0.328h-0.219q-0.578 0.031-0.922 0.516l-7.25 8.672q-0.297 0.438-0.297 0.906zM18.641 34.391q0 0.219 0.094 0.5 0.219 0.547 0.766 0.781 0.344 0.094 0.516 0.094 0.359 0 0.563-0.125 0.563-0.219 0.766-0.703 0.25-0.422 0.031-1.109-0.203-0.516-0.734-0.734l-0.594-0.156q-0.219 0.047-0.531 0.125-0.547 0.203-0.75 0.734-0.125 0.297-0.125 0.594z',
  rain:
    'M0 19.188q0-2.875 1.797-5.117t4.547-2.883q0.781-3.406 3.516-5.594t6.25-2.188q3.438 0 6.133 2.133t3.508 5.477h0.531q2.234 0 4.141 1.086t3.016 2.969 1.109 4.117q0 2.188-1.055 4.070t-2.883 3.008-4 1.188q-0.328 0-0.328-0.281v-2.219q0-0.297 0.328-0.297 2.125-0.109 3.633-1.703t1.508-3.766-1.625-3.773-3.844-1.602h-2.688q-0.297 0-0.297-0.281l-0.125-0.969q-0.281-2.703-2.32-4.523t-4.742-1.82q-2.734 0-4.758 1.82t-2.273 4.523l-0.125 0.891q0 0.313-0.328 0.313l-0.875 0.047q-2.078 0.25-3.492 1.781t-1.414 3.594q0 2.172 1.5 3.766t3.641 1.703q0.281 0 0.281 0.297v2.219q0 0.281-0.281 0.281-3.344-0.156-5.664-2.547t-2.32-5.719zM8.922 30.328q0-0.109 0.063-0.328l2.719-9.609q0.156-0.484 0.539-0.734t0.773-0.25q0.172 0 0.406 0.047 0.594 0.109 0.898 0.609t0.133 1.109l-2.719 9.547q-0.313 1.063-1.375 1.063-0.094 0-0.188-0.031-0.141-0.047-0.172-0.047-0.547-0.156-0.813-0.555t-0.266-0.82zM13.297 35.016l4.063-14.625q0.109-0.484 0.5-0.734t0.813-0.25q0.219 0 0.453 0.047 0.547 0.156 0.813 0.648t0.109 1.070l-4.047 14.641q-0.094 0.422-0.484 0.719t-0.844 0.297q-0.234 0-0.422-0.078-0.5-0.125-0.859-0.656-0.281-0.438-0.094-1.078zM20.172 30.375q0-0.094 0.063-0.375l2.719-9.609q0.141-0.484 0.508-0.734t0.773-0.25q0.203 0 0.438 0.047 0.516 0.141 0.773 0.516t0.258 0.781q0 0.078-0.031 0.227t-0.031 0.195l-2.719 9.547q-0.094 0.484-0.469 0.773t-0.844 0.289l-0.406-0.078q-0.5-0.141-0.766-0.539t-0.266-0.789z',
  showers:
    'M0 19.188q0-2.875 1.797-5.117t4.547-2.883q0.766-3.406 3.5-5.586t6.266-2.18q3.438 0 6.125 2.125t3.516 5.469h0.516q2.234 0 4.141 1.086t3.016 2.969 1.109 4.117q0 3.344-2.305 5.75t-5.633 2.516q-0.328 0-0.328-0.281v-2.219q0-0.297 0.328-0.297 2.141-0.109 3.641-1.703t1.5-3.766-1.625-3.773-3.844-1.602h-2.672q-0.313 0-0.313-0.281l-0.109-0.969q-0.266-2.688-2.305-4.516t-4.758-1.828q-2.734 0-4.766 1.82t-2.297 4.523l-0.094 0.906q0 0.297-0.328 0.297l-0.875 0.047q-2.047 0.094-3.477 1.672t-1.43 3.703q0 2.172 1.5 3.766t3.641 1.703q0.281 0 0.281 0.297v2.219q0 0.281-0.281 0.281-3.344-0.156-5.664-2.547t-2.32-5.719zM9.875 20.656q0-0.609 0.609-1.648t1.141-1.68q0.531-0.594 0.641-0.703l0.594 0.672q0.641 0.688 1.195 1.695t0.555 1.664q0 0.984-0.672 1.641t-1.672 0.656q-0.984 0-1.688-0.672t-0.703-1.625zM14.844 27.297q0-0.688 0.398-1.594t0.977-1.703q0.453-0.641 1.109-1.398t1-1.086q0.172-0.156 0.406-0.391l0.406 0.391q0.938 0.828 2.125 2.438 0.594 0.828 0.984 1.734t0.391 1.609q0 1.609-1.133 2.742t-2.773 1.133q-1.609 0-2.75-1.125t-1.141-2.75zM17.297 16.203q0-1.047 1.625-2.672l0.406 0.422q0.438 0.531 0.797 1.18t0.359 1.070q0 0.641-0.461 1.102t-1.102 0.461q-0.672 0-1.148-0.461t-0.477-1.102z',
  sleet:
    'M0 19.266q0 3.297 2.328 5.688t5.641 2.5q0.297 0 0.297-0.281v-2.219q0-0.297-0.297-0.297-2.109-0.109-3.625-1.695t-1.516-3.695q0-2.094 1.414-3.648t3.492-1.727l0.875-0.125q0.313 0 0.313-0.297l0.125-0.828q0.25-2.734 2.273-4.578t4.773-1.844q2.703 0 4.734 1.828t2.328 4.516l0.109 0.969q0 0.297 0.313 0.297h2.672q2.25 0 3.859 1.609t1.609 3.828q0 2.109-1.508 3.695t-3.633 1.695q-0.328 0-0.328 0.297v2.219q0 0.281 0.328 0.281 3.328-0.109 5.633-2.492t2.305-5.695q0-2.234-1.109-4.133t-3.016-3-4.141-1.102h-0.516q-0.828-3.344-3.516-5.477t-6.125-2.133q-3.516 0-6.25 2.188t-3.5 5.578q-2.813 0.719-4.578 2.945t-1.766 5.133zM9.016 30.969q0 0.422 0.273 0.844t0.789 0.578q0.578 0.172 1.063-0.063t0.656-0.938l0.234-1.016q0.125-0.563-0.156-1.055t-0.859-0.664q-0.563-0.172-1.070 0.125t-0.664 0.891l-0.234 0.984q-0.031 0.094-0.031 0.313zM10.281 26.141q0 0.531 0.422 0.953 0.391 0.422 0.938 0.422 0.594 0 1-0.398t0.406-0.977-0.406-0.977-1-0.398q-0.578 0-0.969 0.391t-0.391 0.984zM11.297 22.344q-0.031 0.391 0.227 0.758t0.805 0.539q0.516 0.156 1.031-0.117t0.688-0.852l0.469-1.5q0.188-0.609-0.109-1.086t-0.906-0.648q-0.547-0.172-1.055 0.109t-0.68 0.828l-0.406 1.531q0 0.047-0.031 0.195t-0.031 0.242zM13.234 36.172q0 0.438 0.258 0.828t0.805 0.547q0.203 0.047 0.422 0.047 1.063 0 1.313-1.016l0.234-0.984q0.156-0.641-0.141-1.141t-0.875-0.609q-0.531-0.172-1.047 0.117t-0.688 0.852l-0.234 0.984q-0.047 0.219-0.047 0.375zM14.531 31.328q0 0.547 0.422 0.969 0.406 0.406 0.953 0.406 0.594 0 0.984-0.391t0.391-0.984q0-0.578-0.391-0.969t-0.984-0.391-0.984 0.391-0.391 0.969zM15.578 27.547q-0.031 0.375 0.219 0.781t0.75 0.5q0.578 0.156 1.063-0.094t0.688-0.938l0.453-1.5q0.172-0.547-0.117-1.047t-0.883-0.672q-0.547-0.172-1.063 0.133t-0.688 0.883l-0.375 1.5q-0.047 0.203-0.047 0.453zM20.172 31.125q0 0.406 0.258 0.797t0.773 0.547q0.078 0 0.227 0.031t0.227 0.031q1.016 0 1.266-1.094l0.234-1q0.172-0.531-0.109-1.047t-0.844-0.688q-0.625-0.156-1.133 0.133t-0.68 0.883l-0.156 0.984q0 0.063-0.031 0.203t-0.031 0.219zM21.406 26.203q0 0.563 0.422 0.953 0.375 0.406 0.953 0.406 0.594 0 0.984-0.391t0.391-0.969q0-0.594-0.391-0.984t-0.984-0.391-0.984 0.391-0.391 0.984zM22.422 22.344q0 0.422 0.273 0.805t0.82 0.539q0.047 0 0.203 0.031t0.234 0.031q0.25 0 0.594-0.156 0.531-0.281 0.688-0.875l0.406-1.5q0.156-0.563-0.125-1.055t-0.844-0.664q-0.578-0.172-1.063 0.094t-0.656 0.844l-0.469 1.516q0 0.063-0.031 0.195t-0.031 0.195z',
  windySnow:
    'M0 19.25q0-2.891 1.773-5.133t4.57-2.93q0.781-3.406 3.508-5.594t6.258-2.188q3.438 0 6.133 2.133t3.508 5.477h0.531q2.234 0 4.141 1.102t3.016 3 1.109 4.133q0 3.313-2.313 5.703t-5.625 2.5q-0.328 0-0.328-0.281v-2.219q0-0.297 0.328-0.297 2.125-0.109 3.633-1.695t1.508-3.711q0-2.219-1.609-3.828t-3.859-1.609h-2.688q-0.297 0-0.297-0.281l-0.125-0.969q-0.281-2.703-2.32-4.531t-4.742-1.828q-2.75 0-4.773 1.844t-2.289 4.578l-0.094 0.828q0 0.313-0.328 0.313l-0.875 0.109q-2.078 0.172-3.492 1.727t-1.414 3.648q0 2.125 1.508 3.711t3.633 1.695q0.281 0 0.281 0.297v2.219q0 0.281-0.281 0.281-3.344-0.109-5.664-2.5t-2.32-5.703zM9.172 32.078q0-0.578 0.422-1 0.406-0.375 0.953-0.375 0.578 0 0.977 0.391t0.398 0.984-0.398 0.984-0.977 0.391-0.977-0.391-0.398-0.984zM10.609 26.031q0-0.563 0.398-0.969t0.977-0.406 0.977 0.406 0.398 0.969q0 0.594-0.398 1.008t-0.977 0.414-0.977-0.414-0.398-1.008zM13.781 35.344q0-0.563 0.422-1.016 0.406-0.406 0.953-0.406 0.594 0 1.016 0.422t0.422 1-0.422 0.977-1.016 0.398q-0.563 0-0.969-0.398t-0.406-0.977zM15.219 29.25q0-0.594 0.406-1.031 0.406-0.406 0.969-0.406 0.578 0 1 0.422t0.422 1.016q0 0.578-0.414 0.992t-1.008 0.414q-0.563 0-0.969-0.414t-0.406-0.992zM15.922 23.219q0-0.578 0.422-1 0.438-0.406 0.953-0.406 0.594 0 1.016 0.414t0.422 0.992-0.422 0.977-1.016 0.398q-0.563 0-0.969-0.398t-0.406-0.977zM19.875 32.078q0-0.563 0.406-1 0.406-0.375 1-0.375t0.984 0.391 0.391 0.984-0.391 0.984-0.984 0.391-1-0.398-0.406-0.977zM21.297 26.031q0-0.547 0.422-0.961t1-0.414 0.977 0.406 0.398 0.969q0 0.594-0.398 1.008t-0.977 0.414q-0.594 0-1.008-0.422t-0.414-1z',
  snow:
    'M0 19.25q0-2.891 1.773-5.133t4.57-2.93q0.781-3.406 3.508-5.594t6.258-2.188q3.438 0 6.133 2.133t3.508 5.477h0.531q2.234 0 4.141 1.102t3.016 3 1.109 4.133q0 3.313-2.313 5.703t-5.625 2.5q-0.328 0-0.328-0.281v-2.219q0-0.297 0.328-0.297 2.125-0.109 3.633-1.695t1.508-3.711q0-2.219-1.609-3.828t-3.859-1.609h-2.688q-0.297 0-0.297-0.281l-0.125-0.969q-0.281-2.703-2.32-4.531t-4.742-1.828q-2.75 0-4.773 1.844t-2.289 4.578l-0.094 0.828q0 0.313-0.328 0.313l-0.875 0.109q-2.078 0.172-3.492 1.727t-1.414 3.648q0 2.125 1.508 3.711t3.633 1.695q0.281 0 0.281 0.297v2.219q0 0.281-0.281 0.281-3.344-0.109-5.664-2.5t-2.32-5.703zM10.609 26.031q0-0.563 0.398-0.969t0.977-0.406 0.977 0.406 0.398 0.969q0 0.594-0.398 1.008t-0.977 0.414-0.977-0.414-0.398-1.008zM10.609 32.078q0-0.594 0.406-1 0.391-0.375 0.969-0.375t0.977 0.391 0.398 0.984-0.398 0.984-0.977 0.391-0.977-0.391-0.398-0.984zM15.922 29.25q0-0.578 0.422-1.031 0.406-0.406 0.953-0.406 0.578 0 1.008 0.43t0.43 1.008-0.422 0.992-1.016 0.414q-0.563 0-0.969-0.414t-0.406-0.992zM15.922 23.219q0-0.578 0.422-1 0.438-0.406 0.953-0.406 0.594 0 1.016 0.414t0.422 0.992-0.422 0.977-1.016 0.398q-0.563 0-0.969-0.398t-0.406-0.977zM15.922 35.344q0-0.563 0.422-1.016 0.406-0.406 0.953-0.406 0.594 0 1.016 0.422t0.422 1-0.422 0.977-1.016 0.398q-0.563 0-0.969-0.398t-0.406-0.977zM21.297 26.031q0-0.547 0.422-0.961t1-0.414 0.977 0.406 0.398 0.969q0 0.594-0.398 1.008t-0.977 0.414q-0.594 0-1.008-0.422t-0.414-1zM21.297 32.078q0-0.547 0.422-1 0.406-0.375 1-0.375t0.984 0.391 0.391 0.984-0.391 0.984-0.984 0.391-1.008-0.398-0.414-0.977z',
  stormyShowers:
    'M0 19.188q0 2.766 1.648 4.953t4.273 2.984l-1.078 2.797q-0.078 0.359 0.234 0.359h3.547l-1.734 6.297h0.469l6.609-8.703q0.094-0.109 0.031-0.227t-0.234-0.117h-3.625l4.125-7.734q0.156-0.344-0.234-0.344h-4.906q-0.234 0-0.375 0.234l-1.797 4.781q-1.781-0.453-2.945-1.938t-1.164-3.344q0-2.078 1.406-3.602t3.5-1.773l0.875-0.125q0.328 0 0.328-0.281l0.125-0.859q0.25-2.703 2.273-4.531t4.758-1.828q2.719 0 4.758 1.828t2.336 4.531l0.094 0.969q0 0.297 0.313 0.297h2.688q2.266 0 3.867 1.578t1.602 3.797q0 2.125-1.484 3.68t-3.656 1.711q-0.328 0-0.328 0.313v2.281q0 0.281 0.328 0.281 1.625-0.047 3.102-0.734t2.539-1.789 1.688-2.609 0.625-3.133q0-2.25-1.117-4.148t-3.023-3-4.141-1.102h-0.531q-0.828-3.328-3.516-5.438t-6.141-2.109q-3.531 0-6.266 2.188t-3.5 5.594q-2.75 0.641-4.547 2.883t-1.797 5.133zM13.594 35.625q0 0.391 0.258 0.773t0.773 0.539q0.344 0.078 0.422 0.078 0.219 0 0.625-0.172 0.531-0.234 0.703-0.875l0.469-1.75q0.156-0.547-0.133-1.047t-0.883-0.672q-0.547-0.156-1.055 0.133t-0.68 0.883l-0.453 1.672q-0.047 0.422-0.047 0.438zM15.828 27.672q0 0.359 0.258 0.727t0.758 0.555q0.563 0.188 1.063-0.078t0.672-0.875l0.5-1.734q0.156-0.547-0.141-1.055t-0.891-0.68q-0.563-0.156-1.078 0.133t-0.688 0.867l-0.406 1.688q-0.047 0.422-0.047 0.453zM20.531 30.422q0 0.422 0.273 0.844t0.789 0.578q0.063 0 0.195 0.031t0.195 0.031q0.328 0 0.625-0.125 0.469-0.172 0.688-0.953l0.422-1.688q0.172-0.578-0.102-1.102t-0.836-0.695q-0.625-0.156-1.133 0.141t-0.617 0.891l-0.453 1.719q-0.047 0.141-0.047 0.328zM22.797 22.438q-0.016 0.391 0.25 0.781t0.813 0.625q0.188 0.094 0.438 0.094 0.266 0 0.563-0.141 0.516-0.25 0.734-0.953l0.484-1.719q0.047-0.328 0.047-0.359 0-0.422-0.273-0.82t-0.82-0.555q-0.063 0-0.188-0.031t-0.188-0.031q-0.422 0-0.813 0.258t-0.547 0.805l-0.453 1.688q-0.047 0.188-0.047 0.359z',
  sunny:
    'M0 15.375q0-0.609 0.422-1.031 0.438-0.406 1-0.406h3.406q0.578 0 0.961 0.422t0.383 1.016-0.383 1.008-0.961 0.414h-3.406q-0.578 0-1-0.422t-0.422-1zM4.766 26.922q0-0.578 0.391-1.016l2.453-2.375q0.375-0.391 0.984-0.391 0.594 0 0.992 0.375t0.398 0.953q0 0.609-0.406 1.063l-2.375 2.375q-1.016 0.797-2.047 0-0.391-0.422-0.391-0.984zM4.766 3.844q0-0.578 0.391-1.016 0.484-0.406 1.063-0.406 0.547 0 0.984 0.406l2.375 2.453q0.406 0.375 0.406 0.984 0 0.594-0.398 0.992t-0.992 0.398q-0.609 0-0.984-0.406l-2.453-2.375q-0.391-0.422-0.391-1.031zM9.016 15.375q0-2.328 1.172-4.336t3.18-3.18 4.336-1.172q1.75 0 3.359 0.695t2.773 1.859 1.852 2.773 0.688 3.359q0 2.344-1.164 4.344t-3.164 3.164-4.344 1.164-4.344-1.164-3.172-3.164-1.172-4.344zM11.844 15.375q0 2.438 1.711 4.164t4.148 1.727 4.164-1.727 1.727-4.164q0-2.406-1.727-4.109t-4.164-1.703q-2.422 0-4.141 1.703t-1.719 4.109zM16.281 28.328q0-0.594 0.414-1t1.008-0.406q0.609 0 1.016 0.406t0.406 1v3.313q0 0.609-0.414 1.031t-1.008 0.422-1.008-0.422-0.414-1.031v-3.313zM16.281 2.5v-3.406q0-0.578 0.422-1t1-0.422 1 0.422 0.422 1v3.406q0 0.578-0.414 0.961t-1.008 0.383-1.008-0.383-0.414-0.961zM25.484 24.469q0-0.578 0.375-0.938 0.375-0.391 0.938-0.391 0.609 0 1 0.391l2.438 2.375q0.406 0.438 0.406 1.016t-0.406 0.984q-1 0.781-2 0l-2.375-2.375q-0.375-0.422-0.375-1.063zM25.484 6.266q0-0.625 0.375-0.984l2.375-2.453q0.438-0.406 0.984-0.406 0.594 0 1.008 0.422t0.414 1q0 0.625-0.406 1.031l-2.438 2.375q-0.453 0.406-1 0.406-0.563 0-0.938-0.398t-0.375-0.992zM29.25 15.375q0-0.594 0.406-1.031 0.406-0.406 0.953-0.406h3.375q0.578 0 1.008 0.43t0.43 1.008-0.43 1-1.008 0.422h-3.375q-0.578 0-0.969-0.414t-0.391-1.008z',
  thunderstorms:
    'M0 19.188q0 2.766 1.656 4.953t4.297 2.984l-1.094 2.797q-0.078 0.359 0.234 0.359h3.547l-1.641 7.172h0.469l6.531-9.578q0.094-0.109 0.023-0.227t-0.242-0.117h-3.625l4.125-7.734q0.172-0.359-0.234-0.359h-4.906q-0.234 0-0.391 0.25l-1.781 4.781q-1.781-0.453-2.953-1.938t-1.172-3.344q0-2.078 1.414-3.609t3.508-1.781l0.875-0.109q0.328 0 0.328-0.297l0.109-0.844q0.266-2.703 2.289-4.531t4.758-1.828q2.719 0 4.758 1.828t2.336 4.531l0.109 0.969q0 0.281 0.297 0.281h2.672q2.266 0 3.875 1.586t1.609 3.805q0 2.125-1.484 3.68t-3.672 1.727q-0.328 0-0.328 0.297v2.281q0 0.281 0.328 0.281 3.328-0.109 5.648-2.516t2.32-5.75q0-2.25-1.109-4.148t-3.023-3-4.164-1.102h-0.516q-0.828-3.328-3.523-5.438t-6.133-2.109q-3.531 0-6.266 2.188t-3.5 5.594q-2.766 0.641-4.563 2.883t-1.797 5.133zM13.578 35.375q0 0.984 0.969 1.281 0.031 0 0.188 0.023t0.234 0.023q0.422 0 0.82-0.242t0.539-0.805l3.75-14.484q0.156-0.594-0.109-1.078t-0.828-0.656q-0.422-0.047-0.438-0.047-0.406 0-0.789 0.25t-0.523 0.75l-3.766 14.531q-0.047 0.219-0.047 0.453zM20.5 30.266q0 0.328 0.172 0.625 0.344 0.547 0.844 0.734 0.266 0.078 0.5 0.078t0.531-0.125q0.516-0.219 0.703-0.953l2.406-9.453q0.078-0.359 0.078-0.453 0-0.375-0.266-0.75t-0.766-0.531q-0.422-0.047-0.438-0.047-0.422 0-0.781 0.242t-0.5 0.758l-2.438 9.5q0 0.047-0.023 0.18t-0.023 0.195z',
  sprinkle:
    'M0 19.188q0-2.875 1.797-5.117t4.547-2.883q0.766-3.406 3.5-5.586t6.266-2.18q3.438 0 6.125 2.125t3.516 5.469h0.516q2.234 0 4.141 1.086t3.016 2.969 1.109 4.117q0 3.344-2.305 5.75t-5.633 2.516q-0.328 0-0.328-0.281v-2.219q0-0.297 0.328-0.297 2.141-0.109 3.641-1.703t1.5-3.766-1.625-3.773-3.844-1.602h-2.672q-0.313 0-0.313-0.281l-0.109-0.969q-0.266-2.688-2.305-4.516t-4.758-1.828q-2.734 0-4.766 1.82t-2.297 4.523l-0.094 0.906q0 0.297-0.328 0.297l-0.875 0.047q-2.047 0.094-3.477 1.672t-1.43 3.703q0 2.172 1.5 3.766t3.641 1.703q0.281 0 0.281 0.297v2.219q0 0.281-0.281 0.281-3.344-0.156-5.664-2.547t-2.32-5.719zM9.875 20.656q0-0.609 0.609-1.648t1.141-1.68q0.531-0.594 0.641-0.703l0.594 0.672q0.641 0.688 1.195 1.695t0.555 1.664q0 0.984-0.672 1.641t-1.672 0.656q-0.984 0-1.688-0.672t-0.703-1.625zM14.844 27.297q0-0.688 0.398-1.594t0.977-1.703q0.453-0.641 1.109-1.398t1-1.086q0.172-0.156 0.406-0.391l0.406 0.391q0.938 0.828 2.125 2.438 0.594 0.828 0.984 1.734t0.391 1.609q0 1.609-1.133 2.742t-2.773 1.133q-1.609 0-2.75-1.125t-1.141-2.75zM17.297 16.203q0-1.047 1.625-2.672l0.406 0.422q0.438 0.531 0.797 1.18t0.359 1.070q0 0.641-0.461 1.102t-1.102 0.461q-0.672 0-1.148-0.461t-0.477-1.102z',
};

const iconsMap = {
  '01d': svgIcons.sunny,
  '02d': svgIcons.cloudy,
  '03d': svgIcons.cloudy,
  '04d': svgIcons.cloudy,
  '09d': svgIcons.showers,
  '10d': svgIcons.rain,
  '11d': svgIcons.thunderstorms,
  '13d': svgIcons.windySnow,
  '50d': svgIcons.fog,
  '01n': svgIcons.sunny,
  '02n': svgIcons.cloudy,
  '03n': svgIcons.cloudy,
  '04n': svgIcons.cloudy,
  '09n': svgIcons.showers,
  '10n': svgIcons.rain,
  '11n': svgIcons.thunderstorms,
  '13n': svgIcons.windySnow,
  '50n': svgIcons.fog,
};

function getIcon(name) {
  if (iconsMap[name]) {
    return iconsMap[name];
  }
  return svgIcons.sunny;
};

async function getCurrentWeather (lat, long) {
    
  const response = await axios.get(`${API_URL}?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`)
  return response.data;
};

export {
  getCurrentWeather,
  getIcon
}
