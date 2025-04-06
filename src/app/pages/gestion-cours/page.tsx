"use client";

import React, { useState, useEffect } from "react";
import useTitle from "@/hooks/useTitle";
import useScrollToTop from "@/hooks/useScrollToTop";
import { PlusCircle, Pencil, Trash2, Search, X, ChevronDown, Filter } from "lucide-react";

// Types
interface Course {
    id: string;
    title: string;
    description: string;
    instructor: string;
    category: string;
    duration: number;
    level: "Débutant" | "Intermédiaire" | "Avancé";
    status: "Actif" | "En attente" | "Archivé";
    thumbnail: string;
    createdAt: string;
}

export default function Page() {
    useTitle("Gestion Cours");
    useScrollToTop();

    // État pour les cours
    const [courses, setCourses] = useState<Course[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // États pour le formulaire
    const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
    const [editingCourse, setEditingCourse] = useState<Course | null>(null);
    const [formData, setFormData] = useState<Omit<Course, "id" | "createdAt">>({
        title: "",
        description: "",
        instructor: "",
        category: "",
        duration: 0,
        level: "Débutant",
        status: "Actif",
        thumbnail: ""
    });

    // États pour la recherche et le filtrage
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filterCategory, setFilterCategory] = useState<string>("");
    const [filterLevel, setFilterLevel] = useState<string>("");
    const [filterStatus, setFilterStatus] = useState<string>("");
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    // Charger des cours fictifs au chargement
    useEffect(() => {
        // Simulation d'un appel API
        setTimeout(() => {
            setCourses([
                {
                    id: "1",
                    title: "Introduction au Bitcoin",
                    description: "Tout ce que vous devez savoir pour commencer avec Bitcoin",
                    instructor: "Satoshi Nakamoto",
                    category: "Cryptomonnaie",
                    duration: 120,
                    level: "Débutant",
                    status: "Actif",
                    thumbnail: "/assets/images/bitcoin-course.jpg",
                    createdAt: "2025-03-15"
                },
                {
                    id: "2",
                    title: "Ethereum et Smart Contracts",
                    description: "Maîtrisez les contrats intelligents et l'écosystème Ethereum",
                    instructor: "Vitalik Buterin",
                    category: "Cryptomonnaie",
                    duration: 180,
                    level: "Intermédiaire",
                    status: "Actif",
                    thumbnail: "/assets/images/ethereum-course.jpg",
                    createdAt: "2025-03-20"
                },
                {
                    id: "3",
                    title: "Blockchain Avancée",
                    description: "Concepts avancés de la technologie blockchain",
                    instructor: "Sandro Lu",
                    category: "Technologie",
                    duration: 240,
                    level: "Avancé",
                    status: "En attente",
                    thumbnail: "/assets/images/blockchain-course.jpg",
                    createdAt: "2025-04-01"
                },
            ]);
            setIsLoading(false);
        }, 1000);
    }, []);

    // Filtrage des cours
    const filteredCourses = courses.filter(course => {
        return (
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (filterCategory === "" || course.category === filterCategory) &&
            (filterLevel === "" || course.level === filterLevel) &&
            (filterStatus === "" || course.status === filterStatus)
        );
    });

    // Gérer la soumission du formulaire
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingCourse) {
            // Mode édition
            setCourses(courses.map(course =>
                course.id === editingCourse.id
                    ? { ...course, ...formData }
                    : course
            ));
        } else {
            // Mode ajout
            const newCourse: Course = {
                id: Date.now().toString(),
                ...formData,
                createdAt: new Date().toISOString().split('T')[0]
            };
            setCourses([...courses, newCourse]);
        }

        // Réinitialiser le formulaire
        resetForm();
    };

    // Réinitialiser le formulaire
    const resetForm = () => {
        setFormData({
            title: "",
            description: "",
            instructor: "",
            category: "",
            duration: 0,
            level: "Débutant",
            status: "Actif",
            thumbnail: ""
        });
        setEditingCourse(null);
        setIsFormOpen(false);
    };

    // Editer un cours
    const handleEditCourse = (course: Course) => {
        setEditingCourse(course);
        setFormData({
            title: course.title,
            description: course.description,
            instructor: course.instructor,
            category: course.category,
            duration: course.duration,
            level: course.level,
            status: course.status,
            thumbnail: course.thumbnail
        });
        setIsFormOpen(true);
    };

    // Supprimer un cours
    const handleDeleteCourse = (id: string) => {
        if (confirm("Êtes-vous sûr de vouloir supprimer ce cours?")) {
            setCourses(courses.filter(course => course.id !== id));
        }
    };

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow min-h-screen">
            {/* En-tête et actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <h1 className="text-2xl font-bold text-[#D4AF37]">Gestion des Cours</h1>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
                        <input
                            type="text"
                            placeholder="Rechercher un cours..."
                            className="pl-10 pr-4 py-2 w-full bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <button
                        className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-md flex items-center justify-center gap-2 transition-colors"
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        <Filter className="h-4 w-4" />
                        Filtres
                    </button>

                    <button
                        className="px-4 py-2 bg-[#D4AF37] hover:bg-[#c4a030] text-black font-medium rounded-md flex items-center justify-center gap-2 transition-colors"
                        onClick={() => setIsFormOpen(true)}
                    >
                        <PlusCircle className="h-4 w-4" />
                        Ajouter
                    </button>
                </div>
            </div>

            {/* Options de filtrage */}
            {isFilterOpen && (
                <div className="mb-6 p-4 bg-zinc-800 rounded-md border border-zinc-700 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1">Catégorie</label>
                        <select
                            className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                        >
                            <option value="">Toutes</option>
                            <option value="Cryptomonnaie">Cryptomonnaie</option>
                            <option value="Technologie">Technologie</option>
                            <option value="Finance">Finance</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1">Niveau</label>
                        <select
                            className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                            value={filterLevel}
                            onChange={(e) => setFilterLevel(e.target.value)}
                        >
                            <option value="">Tous</option>
                            <option value="Débutant">Débutant</option>
                            <option value="Intermédiaire">Intermédiaire</option>
                            <option value="Avancé">Avancé</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-1">Statut</label>
                        <select
                            className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <option value="">Tous</option>
                            <option value="Actif">Actif</option>
                            <option value="En attente">En attente</option>
                            <option value="Archivé">Archivé</option>
                        </select>
                    </div>

                    <div className="md:col-span-3 flex justify-end">
                        <button
                            className="px-4 py-2 text-white bg-zinc-700 hover:bg-zinc-600 rounded-md"
                            onClick={() => {
                                setFilterCategory("");
                                setFilterLevel("");
                                setFilterStatus("");
                            }}
                        >
                            Réinitialiser les filtres
                        </button>
                    </div>
                </div>
            )}

            {/* Liste des cours */}
            {isLoading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="text-xl text-zinc-400">Chargement des cours...</div>
                </div>
            ) : filteredCourses.length === 0 ? (
                <div className="bg-zinc-800 p-10 rounded-md text-center">
                    <div className="text-xl text-zinc-400 mb-4">Aucun cours trouvé</div>
                    <button
                        className="px-4 py-2 bg-[#D4AF37] hover:bg-[#c4a030] text-black font-medium rounded-md inline-flex items-center gap-2"
                        onClick={() => setIsFormOpen(true)}
                    >
                        <PlusCircle className="h-4 w-4" />
                        Créer un cours
                    </button>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-zinc-800 rounded-lg overflow-hidden">
                        <thead className="bg-zinc-700">
                        <tr>
                            <th className="py-3 px-4 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Titre</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider hidden md:table-cell">Catégorie</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider hidden md:table-cell">Instructeur</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider hidden sm:table-cell">Niveau</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">Statut</th>
                            <th className="py-3 px-4 text-right text-xs font-medium text-zinc-300 uppercase tracking-wider">Actions</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-700">
                        {filteredCourses.map((course, index) => (
                            <tr
                                key={course.id}
                                className={`${index % 2 === 0 ? 'bg-zinc-800' : 'bg-zinc-750'} hover:bg-zinc-700 transition-colors`}
                            >
                                <td className="py-4 px-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0 mr-3">
                                            <div className="h-10 w-10 rounded-md bg-zinc-600 flex items-center justify-center text-[#D4AF37]">
                                                {course.title.charAt(0)}
                                            </div>
                                        </div>
                                        <div className="text-sm font-medium text-white">{course.title}</div>
                                    </div>
                                </td>
                                <td className="py-4 px-4 whitespace-nowrap hidden md:table-cell">
                                    <div className="text-sm text-zinc-300">{course.category}</div>
                                </td>
                                <td className="py-4 px-4 whitespace-nowrap hidden md:table-cell">
                                    <div className="text-sm text-zinc-300">{course.instructor}</div>
                                </td>
                                <td className="py-4 px-4 whitespace-nowrap hidden sm:table-cell">
                                    <div className="text-sm text-zinc-300">{course.level}</div>
                                </td>
                                <td className="py-4 px-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                                ${course.status === 'Actif' ? 'bg-green-100 text-green-800' :
                                                course.status === 'En attente' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'}`}>
                                                {course.status}
                                            </span>
                                </td>
                                <td className="py-4 px-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        className="text-[#D4AF37] hover:text-[#c4a030] mr-3"
                                        onClick={() => handleEditCourse(course)}
                                    >
                                        <Pencil className="h-5 w-5" />
                                    </button>
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => handleDeleteCourse(course.id)}
                                    >
                                        <Trash2 className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Modal pour ajouter/éditer un cours */}
            {isFormOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-zinc-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center border-b border-zinc-700 p-5">
                            <h2 className="text-xl font-bold text-[#D4AF37]">
                                {editingCourse ? 'Modifier le cours' : 'Ajouter un nouveau cours'}
                            </h2>
                            <button
                                className="text-zinc-400 hover:text-white"
                                onClick={resetForm}
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        <form onSubmit={handleFormSubmit} className="p-5 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-1">Titre*</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                                        className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-1">Catégorie*</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.category}
                                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                                        className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-1">Instructeur*</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.instructor}
                                        onChange={(e) => setFormData({...formData, instructor: e.target.value})}
                                        className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-1">Durée (minutes)*</label>
                                    <input
                                        type="number"
                                        required
                                        min="1"
                                        value={formData.duration}
                                        onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value) || 0})}
                                        className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-1">Niveau*</label>
                                    <select
                                        required
                                        value={formData.level}
                                        onChange={(e) => setFormData({...formData, level: e.target.value as any})}
                                        className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                                    >
                                        <option value="Débutant">Débutant</option>
                                        <option value="Intermédiaire">Intermédiaire</option>
                                        <option value="Avancé">Avancé</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-1">Statut*</label>
                                    <select
                                        required
                                        value={formData.status}
                                        onChange={(e) => setFormData({...formData, status: e.target.value as any})}
                                        className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                                    >
                                        <option value="Actif">Actif</option>
                                        <option value="En attente">En attente</option>
                                        <option value="Archivé">Archivé</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-1">URL de la miniature</label>
                                    <input
                                        type="text"
                                        value={formData.thumbnail}
                                        onChange={(e) => setFormData({...formData, thumbnail: e.target.value})}
                                        placeholder="URL de l'image"
                                        className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-1">Description*</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.description}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                                ></textarea>
                            </div>

                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-md transition-colors"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-[#D4AF37] hover:bg-[#c4a030] text-black font-medium rounded-md transition-colors"
                                >
                                    {editingCourse ? 'Mettre à jour' : 'Ajouter'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}