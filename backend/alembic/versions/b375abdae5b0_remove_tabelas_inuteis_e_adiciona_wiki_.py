"""remove tabelas inuteis e adiciona wiki_pages

Revision ID: b375abdae5b0
Revises: 50a41e80db71
Create Date: 2026-11-01 21:02:27.653556

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = 'b375abdae5b0'
down_revision: Union[str, Sequence[str], None] = '50a41e80db71'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    # 1) Cria a wiki_pages
    op.create_table(
        'wiki_pages',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('title', sa.String(length=120), nullable=False),
        sa.Column('slug', sa.String(length=150), nullable=False),
        sa.Column('subtitle', sa.String(length=200), nullable=True),
        sa.Column('category', sa.String(length=50), nullable=False),
        sa.Column('content', sa.Text(), nullable=False),
        sa.Column('image_url', sa.String(length=500), nullable=False),
        sa.Column('fixed', sa.Boolean(), server_default=sa.text('false'), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.PrimaryKeyConstraint('id'),
    )
    op.create_index(op.f('ix_wiki_pages_category'), 'wiki_pages', ['category'], unique=False)
    op.create_index(op.f('ix_wiki_pages_id'), 'wiki_pages', ['id'], unique=False)
    op.create_index(op.f('ix_wiki_pages_slug'), 'wiki_pages', ['slug'], unique=True)

    # 2) Remove as tabelas antigas: filhas (characters, authors) antes de books
    op.drop_index(op.f('ix_characters_id'), table_name='characters')
    op.drop_table('characters')
    op.drop_index(op.f('ix_authors_id'), table_name='authors')
    op.drop_table('authors')
    op.drop_index(op.f('ix_books_id'), table_name='books')
    op.drop_table('books')
    op.drop_index(op.f('ix_users_id'), table_name='users')
    op.drop_table('users')


def downgrade() -> None:
    """Downgrade schema."""
    # 1) Remove a wiki_pages (índices antes da tabela)
    op.drop_index(op.f('ix_wiki_pages_category'), table_name='wiki_pages')
    op.drop_index(op.f('ix_wiki_pages_slug'), table_name='wiki_pages')
    op.drop_index(op.f('ix_wiki_pages_id'), table_name='wiki_pages')
    op.drop_table('wiki_pages')

    # 2) Recria as tabelas antigas: books primeiro, pois authors e characters dependem dela
    op.create_table(
        'books',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('title', sa.String(length=200), nullable=False),
        sa.Column('synopsis', sa.Text(), nullable=True),
        sa.Column('cover', sa.String(length=300), nullable=True),
        sa.PrimaryKeyConstraint('id', name=op.f('books_pkey')),
    )
    op.create_index(op.f('ix_books_id'), 'books', ['id'], unique=False)

    op.create_table(
        'authors',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(length=150), nullable=False),
        sa.Column('bio', sa.Text(), nullable=True),
        sa.Column('photo', sa.String(length=300), nullable=True),
        sa.Column('book_id', sa.Integer(), nullable=True),
        sa.ForeignKeyConstraint(['book_id'], ['books.id'], name=op.f('authors_book_id_fkey')),
        sa.PrimaryKeyConstraint('id', name=op.f('authors_pkey')),
    )
    op.create_index(op.f('ix_authors_id'), 'authors', ['id'], unique=False)

    op.create_table(
        'characters',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(length=150), nullable=False),
        sa.Column('description', sa.Text(), nullable=True),
        sa.Column('image', sa.String(length=300), nullable=True),
        sa.Column('book_id', sa.Integer(), nullable=True),
        sa.ForeignKeyConstraint(['book_id'], ['books.id'], name=op.f('characters_book_id_fkey')),
        sa.PrimaryKeyConstraint('id', name=op.f('characters_pkey')),
    )
    op.create_index(op.f('ix_characters_id'), 'characters', ['id'], unique=False)

    op.create_table(
        'users',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(length=150), nullable=False),
        sa.Column('email', sa.String(length=200), nullable=False),
        sa.Column('password_hash', sa.String(length=300), nullable=False),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=True),
        sa.PrimaryKeyConstraint('id', name=op.f('users_pkey')),
        sa.UniqueConstraint('email', name=op.f('users_email_key')),
    )
    op.create_index(op.f('ix_users_id'), 'users', ['id'], unique=False)
    # ### end Alembic commands ###
