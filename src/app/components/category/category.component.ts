import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: false,
  
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Furniture' },
    { id: 3, name: 'Clothing' }
  ];
  currentCategory = { id: null, name: '' };
  isFormVisible = false;
  isEditMode = false;

  // Show form to add new category
  showCreateForm() {
    this.isFormVisible = true;
    this.isEditMode = false;
    this.currentCategory = { id: null, name: '' };
  }

  // Show form to edit existing category
  showEditForm(category: any) {
    this.isFormVisible = true;
    this.isEditMode = true;
    this.currentCategory = { ...category };
  }

  // Create new category
  createCategory() {
    const newCategory = { ...this.currentCategory, id: this.categories.length + 1 };
    this.categories.push(newCategory);
    this.cancelForm();
  }

  // Update an existing category
  updateCategory() {
    const index = this.categories.findIndex(c => c.id === this.currentCategory.id);
    if (index !== -1) {
      // this.categories[index] = { ...this.currentCategory };
    }
    this.cancelForm();
  }

  // Delete a category
  deleteCategory(id: number) {
    this.categories = this.categories.filter(category => category.id !== id);
  }

  // Cancel form and hide it
  cancelForm() {
    this.isFormVisible = false;
    this.isEditMode = false;
    this.currentCategory = { id: null, name: '' };
  }
}
