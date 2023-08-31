import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "fist_project_dv.settings")

import django
django.setup()

from faker import Faker
from first_app.models import User

fake_creator = Faker()

def populate(n):
    for i in range(n):

        f_name = fake_creator.first_name()
        l_name = fake_creator.last_name()
        email = f"{f_name}.{l_name}@{fake_creator.domain_name()}"

        user = User.objects.get_or_create(first_name=f_name, last_name=l_name, email=email)[0]

if __name__ == "__main__":
    populate(50)