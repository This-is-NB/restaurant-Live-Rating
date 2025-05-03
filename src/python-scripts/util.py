from bs4 import BeautifulSoup

categories = [
    {"id": 2099934, "name": "Kake Kababs", "count": 4, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "isActive": True, "grayscale": True, "products": []},
    {"id": 2099933, "name": "Breakfast", "count": 7, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099935, "name": "Kake Di Kadhai", "count": 2, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099936, "name": "Kake Da Meetha", "count": 8, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099937, "name": "Beverages", "count": 25, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099938, "name": "Shakes", "count": 9, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099939, "name": "Papadum And Salad", "count": 5, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099940, "name": "Soups", "count": 8, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099941, "name": "Kake Tandoori Starters", "count": 12, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099942, "name": "Kake Platter", "count": 2, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099943, "name": "Kake Naan Rolls", "count": 4, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099944, "name": "Kake Chinese Pan", "count": 22, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099945, "name": "Noodles/Fried Rice", "count": 10, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099946, "name": "Kake Tandoori Naans", "count": 21, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099947, "name": "Kake Tandoori Roti/Paratha", "count": 12, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099948, "name": "Kake Tawa Roti/Paratha", "count": 11, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099949, "name": "Kakes Curries", "count": 29, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099950, "name": "Dal", "count": 4, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099951, "name": "Tandoori Handi Special Curries", "count": 4, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099952, "name": "Tandoori Handi Khichdi/ Biryani", "count": 3, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099953, "name": "Rice/Pulao", "count": 7, "imageUrl": "https://cdn.uengage.io/uploads/59827/image-3724-1745238744.jpg", "products": []},
    {"id": 2099954, "name": "Raita", "count": 5, "imageUrl": "https://cdn.uengage.io/uploads/59827/image-6133-1745238737.jpg", "products": []},
    {"id": 2099955, "name": "Desserts", "count": 13, "imageUrl": "https://cdn.uengage.io/uploads/59827/image-2573-1745238688.jpeg", "products": []},
    {"id": 2099956, "name": "Kdh Thali [Monday-Friday]", "count": 3, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099957, "name": "Kdh Chinese Combo", "count": 2, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099958, "name": "Kdh Indian Combo", "count": 1, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []},
    {"id": 2099959, "name": "Others", "count": 1, "imageUrl": "https://www.uengage.in/images/addo/logos/logo-59827-1744889407.jpeg", "grayscale": True, "products": []}
]


# Sample HTML input, replace this with the actual HTML string or load it from a file
with open('src/python-scripts/products.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

# Parse the HTML using BeautifulSoup
soup = BeautifulSoup(html_content, 'html.parser')

def parse_product(categoryId, product_div):
    product = {}

    # Extracting product ID
    product['id'] = int(product_div['id'].split('-')[1])  # Assuming the ID format is 'item-<product_id>'
    product['categoryId'] = categoryId  # Assigning category ID
    # Extracting product name (h4)
    product['name'] = product_div.find('h4', class_='item-title').text.strip()

    # Extracting price (p with class 'price-p')
    price_tag = product_div.find('p', class_='pric e-p')
    if price_tag:
        product['price'] = float(price_tag.text.strip().replace('₹', '').replace(',', '').strip())
    
    # Extracting description (p with class 'heading-customize')
    description_tag = product_div.find('p', class_='heading-customize')
    if description_tag:
        product['description'] = description_tag.text.strip()

    # Extracting availability time (if present)
    availability_tag = product_div.find('div', class_='available-next')
    if availability_tag:
        product['availableTime'] = availability_tag.text.strip()

    # Checking if product is vegetarian
    veg_flag = product_div.find('div', class_='veg-flag')
    product['isVeg'] = bool(veg_flag)  # If there's a veg flag, it's vegetarian

    # Assuming product is available unless 'd-none' class is found on availability div
    product['isAvailable'] = True

    # Return product details
    return product

def parse_category(category_div):
    category = [cat for cat in categories if cat['id'] == int(category_div['id'])][0]  # Find category by ID

    # Extracting category ID (assuming div with class 'page-section' has the category ID as a part of its class or ID)
    # category['id'] = int(category_div['id'])
    # category['name'] = category_div.find('h3', class_='wla-outlet-name-md-two').text.strip()
    
    # Initialize product list
    # category['products'] = []

    # Find all product divs within the category
    product_divs = category_div.find_all('div', class_='item-card-design-new')
    for product_div in product_divs:
        product = parse_product(category['id'], product_div)
        category['products'].append(product)

    # Calculate product count
    category['count'] = len(category['products'])

    # Assuming the image URL is embedded in the category name tag or can be extracted separately
    # image_tag = category_div.find('img')
    # if image_tag:
    #     category['imageUrl'] = image_tag.get('src', '')

    # Return category with products
    return category

def extract_data_from_html(html_content):
    # Parse the HTML
    soup = BeautifulSoup(html_content, 'html.parser')

    # Initialize categories list
    categories = []

    # Find all category sections (based on div with class 'page-section')
    category_divs = soup.find_all('div', class_='page-section')
    for category_div in category_divs:
        category = parse_category(category_div)
        categories.append(category)

    return categories

# Run the extraction
categories_data = extract_data_from_html(html_content)

# Output result (you can print or return this)
import json
# print(json.dumps(categories_data, indent=2))
with open('src/python-scripts/Menu.json', 'w', encoding='utf-8') as f:
    json.dump(categories_data, f, ensure_ascii=False, indent=4)
