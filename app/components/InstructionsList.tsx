import { GoChecklist } from "react-icons/go";
import Instruction from "@/app/models/Instruction.model";
import InstructionCard from "@/app/components/InstructionCard";

interface Props {
  instructions: Instruction[];
}

export default function InstructionsList({ instructions }: Props) {
  return (
    <div className="p-2 mb-4">
      <div className="flex justify-center items-center w-full gap-2 mb-4">
        <GoChecklist className="h-6 w-6" />
        <p className="text-xl">Instructions</p>
      </div>
      <div className="flex flex-col gap-4">
        {instructions.map((instruction, index) => (
          <InstructionCard
            instruction={instruction}
            key={index}
            index={index + 1}
            instructionTitle={instruction.title}
          />
        ))}
      </div>
    </div>
  );
}
