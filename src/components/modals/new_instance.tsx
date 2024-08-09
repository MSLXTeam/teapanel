import {useState} from "react";
import {useNewInstanceContext} from "@/components/modals/new_instance_context";
import {TYPES} from "@/lib/types/enum_target_types";
import {RegisteredParser} from "@/lib/types/registered_parser";
import builtin_parsers from "@/lib/defaults/builtin_parsers";

type step = { name: string, status: boolean };

function NewInstanceModal(props: { parsers: RegisteredParser[], external_constructors: [string, number][]}) {
    const {isOpen, closeModal} = useNewInstanceContext();
    const parsers = props.parsers != void (0) ? props.parsers : builtin_parsers;

    const [type, setType] = useState(TYPES.JAVA);
    const [parser, setParser] = useState(0);
    const [steps, setSteps] = useState<step[]>([
        {name: "基础信息", status: true},
        {name: "运行配置", status: false},
    ]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="modal modal-open">
                <div className="modal-box">
                    <form method="dialog">
                        {/* 这是关闭按钮 */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={closeModal}>✕
                        </button>
                    </form>
                    <h2 className="font-bold text-lg mb-4">新实例</h2>

                    <div className="mb-4">
                        <ul className="steps">
                            {steps.map(step => <li key={"steps_" + step.name}
                                           className={step.status ? "step w-1/2 mr-4 step-neutral" : "step w-1/2 mr-4"}>{step.name}</li>
                            )}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <label className="form-control w-full">
                            <input type="text" placeholder="实例名称" className="input input-bordered w-full"/>
                        </label>

                        <div className="space-y-2">
                            <select className="select w-full"
                                    onChange={(e) => setType(e.currentTarget.selectedIndex <= 5 ? e.currentTarget.selectedIndex - 1 : Number(e.currentTarget.accessKey))}>
                                <option disabled selected>选择一个构造器</option>
                                <option key="je">Minecraft Java Edition Server</option>
                                <option key="be">Minecraft Bedrock Edition Server</option>
                                <option key="binary">Common Binary File</option>
                                <option key="docker">Run a Docker configuration</option>
                                {props.external_constructors.map(name => <option key={name[1]}>{name[0]}</option>)}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <select className="select w-full"
                                    onChange={(e) => setParser(e.currentTarget.selectedIndex - 1)}>
                                <option disabled selected>选择一个输出Parser</option>
                                <option key="NullParser">Null</option>
                                {parsers.map(item =>
                                    <option key={item.name} disabled={!item.enable_condition(type)}>
                                        {item.name}
                                    </option>
                                )}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-end mt-6">
                                <button className="btn" onClick={closeModal}>取消</button>
                                <button className="btn btn-neutral ml-2">下一步</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewInstanceModal;
