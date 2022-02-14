import Main from './message.vue';
import { createApp, h,  } from 'vue';

function toConstructor(component) {
    console.log(component, 'component');
    return function (props, children) {
        console.log(children); // 这是一个弹窗展示
        // id: "message_1"
        // message: "这是一个弹窗展示"
        // type: "success"
        // verticalOffset: 12
        // zIndex: 2000
        console.log(props, 'props, children');
        const div = document.createElement('div');
        const { getContainer } = props;
        if (getContainer) {
            const root = getContainer();
            root.appendChild(div);
        } else {
            document.body.appendChild(div);
        }
        let app;
        function destroyed() {
            app.unmount(div);
        }
        app = createApp({
            unmounted() {
                div.parentNode?.removeChild(div);
            },
            render() {
                return h(
                    component,
                    {
                        ...props,
                        destroyed,
                        ref: 'instance',
                    },
                    children
                );
            },
        });
        const $ = app.mount(div);
        return {
            app,
            $,
            context: $.$refs.instance,
        };
    };
}

const MessageConstructor = toConstructor(Main);

const instances = [];
let seed = 1;
const spacing = 12;

const Message = function (options) {
    /**
     *  {message: "这是一个弹窗展示",
     *  type: "success"}
     * 
     */
    console.log(options, 'options');
    const id = 'message_' + seed++;
    let verticalOffset = options.offset || 0;
    const children = options.message;
    instances.forEach((item) => {
        verticalOffset += item.$el.offsetHeight + spacing;
    });
    verticalOffset += spacing;
    const { context } = MessageConstructor(
        {
            ...options,
            message: options.message,
            id,
            zIndex: 2000,
            verticalOffset,
        },
        children
    );
    context.dom = context.$el;
    instances.push(context);
    return context;
}
Message.COMPONENT = Main;
export default Message;
