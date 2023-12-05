import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = {image: data.file[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            // now send the menu data to server with image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            if(menuRes.data.insertedId){
                // show success popup
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${name} Added to Cart successfully`,
                    showConfirmButton: false,
                    timer: 1500
                    });
            }
        }
    }

    return (
        <div className="bg-base-200 min-h-screen">
            <SectionTitle
                subHeading={"What's new?"}
                heading={'ADD AN ITEM'}
            ></SectionTitle>
            <div className="w-4/5 max-w-screen-lg mx-auto p-10 bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="form-control md:col-span-2">
                    <label className="label">
                        <span className="label-text">Recipe name*</span>
                    </label>
                    <input 
                        type="text" 
                        placeholder="Recipe name" 
                        className="input input-bordered"
                        {...register("name", {required: true})}
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category*</span>
                    </label>
                    <select 
                        {...register("category", {required: true})}
                        className="select select-bordered w-full"
                        defaultValue={'default'}>
                        <option value={'default'} disabled>Select a category</option>
                        <option value={'salad'}>Salad</option>
                        <option value={'pizza'}>Pizza</option>
                        <option value={'soup'}>Soup</option>
                        <option value={'dessert'}>Dessert</option>
                        <option value={'drinks'}>Drinks</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price*</span>
                    </label>
                    <input 
                        type="number" 
                        placeholder="Price"
                        className="input input-bordered"
                        {...register("price", {required: true})}
                    />
                </div>
                <div className="form-control md:col-span-2">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea 
                        type="text" 
                        placeholder="Recipe Details" 
                        className="input textarea-bordered h-28 md:h-44 pt-3"
                        {...register("details", {required: true})}
                    ></textarea>
                </div>
                <div className="form-control md:col-span-2">
                    <input 
                        type="file" 
                        className="file-input w-full max-w-xs"
                        {...register("file", {required: true})}
                    />
                </div>
                <div className="form-control">
                    <button className="btn btn-secondary w-36">Add Item<FaUtensils></FaUtensils></button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default AddItems;