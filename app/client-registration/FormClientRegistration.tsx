"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { toast } from "react-hot-toast";;

const schema = z.object({
    date: z.string().min(1, "Required"),
    name: z.string().min(1, "Required"),
    email: z.string().email("Invalid email").min(1, "Required"),
    residentialAddress: z.string().min(1, "Required"),
    postalAddress: z.string().min(1, "Required"),
    contactNumber: z.string().min(1, "Required"),
    driverLicence: z.string().min(1, "Required"),
    boatRego: z.string(),
    trailerRego: z.string(),
    boatName: z.string(),
    storageFee: z.string(),
    notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function FormClientRegistration() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        // alert("Form submitted!");
        toast.error("Form submit is not working, please send us an email for now since we are still working on this.");
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-4xl mx-auto bg-white text-black p-10 border border-gray-300 shadow space-y-6 my-8"
        >
            <h2 className="text-xl font-bold text-center mb-6">
                SCHEDULE OF CLIENT/PROPERTY DETAILS (“Schedule”)
            </h2>

            <div className="space-y-4">
                {["Date", "Name", "E-mail Address", "Residential Address", "Postal Address", "Contact Number", "Driver Licence Number", "Boat/Car Rego", "Trailer Rego", "Boat Name", "Monthly/Annual Storage Fee"].map((label, index) => {
                    const name = schema.keyof().options[index] as keyof FormData;
                    const type = name === "date" ? "date" : "text";
                    return (
                        <div key={name} className="flex items-center gap-4 mb-2">
                            <label className="w-64 text-sm font-medium whitespace-nowrap">{label}</label>
                            <div className="flex-1">
                                <input
                                    type={type}
                                    {...register(name)}
                                    className="w-full border border-gray-400 h-10 px-3 rounded"
                                />
                                {errors[name] && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors[name]?.message as string}
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex gap-4 items-start">
                <label className="w-64 text-sm font-medium mt-2">Notes</label>
                <textarea
                    rows={4}
                    {...register("notes")}
                    className="flex-1 border border-gray-400 px-3 py-2 rounded"
                ></textarea>
            </div>

            <div className="text-sm leading-relaxed bg-gray-100 p-4 rounded mt-4">
                <p className="mb-1">Dear Client,</p>
                <p className="mb-2">
                    Please note that liability for any loss whatsoever,
                    remains with the owner of the boat, car or other item identified and
                    their individual insurance company.
                </p>
                <p className="mb-2">
                    Accordingly, Cairns Boat Storage is indemnified at all times and in
                    all circumstances against loss from, or claims by the undersigned,
                    Customers, their agents or underwriters.
                </p>
                <p className="mb-2">
                    Please read the terms and conditions below before signing.
                </p>
                <p>
                    I acknowledge and agree to be bound by the following terms and
                    conditions in relation to storage of my boat, car or other item at
                    Cairns Boat Storage facility.
                </p>

                <h2 className="text-lg font-bold text-center my-6">
                    TERMS AND CONDITIONS
                </h2>
                <div className="text-sm">
                    <p className="mb-2"><strong>GENERAL</strong></p>
                    <p className="mb-2">
                        1. I, the Customer, declare that I am the owner of the boat, car or other item identified in the Schedule OR I am authorised by the owner of this item on the application form to enter into this storage arrangement.
                    </p>
                    <p className="mb-2">
                        2. The facility is to be used solely for the storage of the item(s) listed in the Schedule and not for any other item, thing or any activity or purpose.
                    </p>

                    <p className="mb-2"><strong>COST</strong></p>
                    <p className="mb-2">
                        3. The Customer agrees to pay the storage fee, being the amount stated in the Schedule or the amount notified to the Customer in writing by Cairns Boat Storage from time to time. The storage fee is payable in advance and it is the Customer’s responsibility to ensure that payment is made directly to Cairns Boat storage, on time, in full, throughout the period of storage.
                    </p>
                    <div className="space-y-4 ml-6 mb-2">
                        <p className="mb-2">4. The Customer:</p>
                        <p className="ml-6 mb-2">4.1. Acknowledges that Cairns Boat Storage may vary these terms and conditions and the rates payable for storage at any time without notice to the Customer; and</p>
                        <p className="ml-6 mb-2">4.2. Agrees to be bound by such changes on and from the time of that change. Cairns Boat Storage will not however, increase the rates during a term for which the Customer has prepaid.</p>
                    </div>

                    <p className="mb-2"><strong>RISK AND RESPONSIBILITY</strong></p>
                    <p className="mb-2">
                        5. The Customer acknowledges that:
                    </p>
                    <div className="space-y-4 ml-6">
                        <p className="mb-2">5.1. Any item stored is done so entirely at its own risk;</p>
                        <p className="mb-2">5.2. Entry into the facility is at its own risk; and</p>
                        <p className="mb-2">
                            5.3. That Cairns Boat Storage has no liability in tort or contract or otherwise (including negligence) for:
                        </p>
                        <p className="ml-6 mb-2">5.3.1. Any act or omission be it whether deliberate, negligent or otherwise and whether by itself, its officers or agents;</p>
                        <p className="ml-6 mb-2">5.3.2. Any act or omission by any third party (including other users of the compound whether deliberate, negligent or otherwise and whether by itself, its officers, servants or agent).</p>
                    </div>
                    <p className="mb-2">
                        6. The Customer agrees:
                    </p>
                    <div className="space-y-4 ml-6 mb-2">
                        <p className="ml-6 mb-2">
                            6.1. That it is responsible for parking and removing its boat, trailer, car and any other item, and will use all due care and skill in doing so;
                        </p>
                        <p className="ml-6 mb-2">
                            6.2. That they are responsible for any cyclone tie down, and for securing their boat, car and any other item stored in the compound; and
                        </p>
                        <p className="ml-6 mb-2">
                            6.3. To indemnify Cairns Boat Storage in relation to any and all claims against it for loss, damage and expense sustained by any person arising out of any act or omission by it (including any legal costs incurred in defending such claim).
                        </p>
                    </div>

                    <p className="mb-2 font-bold">ACCESS AND CONDITIONS</p>
                    <p className="mb-2">
                        7. All storage sites must be kept clean and tidy at all times and free of fuel, paints and rubbish.
                    </p>
                    <p className="mb-2">
                        8. The Customer acknowledges and agrees that:
                    </p>
                    <div className="space-y-4 ml-6 mb-2">
                        <p className="ml-6 mb-2">
                            8.1. Children are not permitted within the compound unless strictly supervised by a parent;
                        </p>
                        <p className="ml-6 mb-2">
                            8.2. Intoxicated persons are not permitted within the facility;
                        </p>
                        <p className="ml-6 mb-2">
                            8.3. Disposal of oils/greases, fuel and rubbish is the responsibility of the Customer and is not to be left in the compound. All spills must be thoroughly cleaned up immediately; and
                        </p>
                        <p className="ml-6 mb-2">
                            8.4. They are aware that the Privacy Act 2000 may prevent Cairns Boat Storage from disclosing personal information about them without the Customer’s approval and authorise Cairns Boat Storage to provide personal details to persons who it considers, in its absolute discretion, to have a claim against the Customer.
                        </p>
                    </div>
                    <p className="mb-2">
                        9. Cairns Boat Storage retains the right to require the Customer and any person accompanying the Customer to immediately leave the facility and remove all items for breach of these conditions.
                    </p>

                    <p className="mb-2 font-bold">DEFAULT</p>
                    <p className="mb-2">
                        10. The Customer:
                    </p>
                    <div className="space-y-4 ml-6 mb-2">
                        <p className="ml-6 mb-2">
                            10.1. Acknowledges that, in the event of the storage fee, or any other monies owing under this Agreement, not being paid in full within 30 days of the due date, Cairns Boat Storage may, without further notice, sell or dispose of any car, boat or other item in the Facility on such terms as the owners of Cairns Boat Storage shall determine; and
                        </p>
                        <p className="ml-6 mb-2">
                            10.2. Authorizes the sale or disposal of the items regardless of their nature or value.
                        </p>
                    </div>
                    <p className="mb-2">
                        11. Cairns Boat Storage reserves the right to recover from the Customer the costs of default on the part of the Customer, including any costs associated with disposal or sale of the car, boat or other item, if the sale proceeds of the item are insufficient to cover the outstanding storage fees and the costs of removal.
                    </p>
                    <p className="mb-2">
                        12. If, in the opinion of Cairns Boat Storage, a defaulting Customer’s car, boat or other item is not saleable, fails to sell when offered for sale, or is not of sufficient value to warrant the expense of attempting to sell, the Customer acknowledges that Cairns Boat Storage may dispose of the car, boat or other item in any manner it thinks fit, having previously given the Customer seven (7) days notice of its intention to do so by way of posting such notice to the Customer at the residential address or email addresses provided in the Schedule.
                    </p>

                    <p className="mb-2 font-bold">TERMINATION</p>
                    <p className="mb-2">
                        13. When any agreed initial fixed period of storage has ended, either party may terminate this Agreement by written notice.
                    </p>
                    <p className="mb-2">
                        14. In the event of illegal or environmentally harmful activities being undertaken by the Customer, Cairns Boat storage may terminate the Agreement upon seven (7) days notice in writing to the Customer at its email and/or residential address provided in the Schedule. If Cairns Boat Storage determines that such illegal or environmentally harmful activities, in its sole discretion, constitute an emergency it may terminate the agreement without notice to the Customer.
                    </p>
                    <p className="mb-2">
                        15. Upon termination the Customer must remove all items from the Lot and leave the Lot in a clean condition to the satisfaction of Cairns Boat Storage. The Customer must pay any outstanding monies and any expenses on default or other monies owed to Cairns Boat Storage up to the date of termination. Any calculation of outstanding fees will be by Cairns Boat Storage and such calculation will be final.
                    </p>
                    <p className="mb-2">
                        16. The Customer’s liability for outstanding fees, property damage, personal injury and environmental damage under this Agreement continues beyond the termination of this Agreement.
                    </p>
                    <p className="font-semibold mt-8">
                        By clicking the submit form, I confirm that I have read, acknowledged, and accepted all the terms and conditions outlined in this form.
                    </p>


                    <div className="my-2">
                        <div className="flex items-center gap-4 mb-2">
                            <label className="w-64 text-sm font-medium whitespace-nowrap">Name</label>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    className="w-full border border-gray-400 h-10 px-3 rounded"
                                    value={watch("name") || ""}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mb-2">
                            <label className="w-64 text-sm font-medium whitespace-nowrap">Date</label>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    className="w-full border border-gray-400 h-10 px-3 rounded"
                                    value={watch("date") || ""}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="text-center">
                <Button type="submit" className="mt-6">
                    Submit Form
                </Button>
            </div>
            <div className="text-center mt-2">
                <p className="text-red-500 text-sm">
                    IMPORTANT NOTICE<br />This form is not working yet, please give us a call or send us an email.
                </p>
            </div>
        </form>
    );
}
