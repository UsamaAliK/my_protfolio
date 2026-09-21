import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def build_pdf():
    pdf_path = "public/Usama_Ali_CV.pdf"
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )
    
    styles = getSampleStyleSheet()
    
    # Custom Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#111827')
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=12,
        leading=16,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#0D9488')
    )
    
    contact_style = ParagraphStyle(
        'ContactInfo',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        alignment=TA_CENTER,
        textColor=colors.HexColor('#4B5563')
    )
    
    section_heading = ParagraphStyle(
        'SecHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#111827'),
        spaceAfter=3
    )
    
    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor('#374151')
    )
    
    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#374151'),
        leftIndent=12,
        spaceAfter=2
    )

    story = []
    
    # 1. Header
    story.append(Paragraph("USAMA ALI", title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("AI Engineer &bull; ML Engineer", subtitle_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "+92 0318 4383585 &nbsp;&bull;&nbsp; usamaaliawan88@gmail.com &nbsp;&bull;&nbsp; github.com/UsamaAliK &nbsp;&bull;&nbsp; linkedin.com/in/usama-ali-ai-eng",
        contact_style
    ))
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#E8E8E4'), spaceAfter=10))

    # 2. Summary
    story.append(Paragraph("SUMMARY", section_heading))
    story.append(Paragraph(
        "AI/ML Engineer with hands-on experience building AI applications using Python, RAG pipelines, LLM APIs, embeddings, and machine learning. Experienced in FastAPI backend development, PostgreSQL, semantic search, and integrating AI technologies into practical applications.",
        body_style
    ))
    story.append(Spacer(1, 10))

    # 3. Tools & Technology
    story.append(Paragraph("TOOLS & TECHNOLOGY", section_heading))
    tech_items = [
        "<b>Programming Languages:</b> Python",
        "<b>AI & Machine Learning:</b> RAG, LLM APIs, Embeddings, LangChain, PyTorch, TensorFlow",
        "<b>Backend & Security:</b> FastAPI, REST APIs, SQLAlchemy, Alembic, JWT Authentication, Authorization",
        "<b>Databases:</b> PostgreSQL, SQLite",
        "<b>Vector Databases:</b> pgvector, ChromaDB, FAISS",
        "<b>Tools & Automation:</b> Pandas, NumPy, Git, GitHub API, n8n"
    ]
    for item in tech_items:
        story.append(Paragraph(f"&bull;&nbsp; {item}", bullet_style))
    story.append(Spacer(1, 10))

    # 4. Experience
    story.append(Paragraph("EXPERIENCE", section_heading))
    
    # Experience Header Row
    exp_header = [
        Paragraph("<b>GenAI Engineer Intern</b> &mdash; <i>CypherShield</i>", body_style),
        Paragraph("<font color='#6B7280'>July &ndash; November 2025</font>", ParagraphStyle('RightText', parent=body_style, alignment=TA_RIGHT))
    ]
    exp_table = Table([exp_header], colWidths=[380, 160])
    exp_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ]))
    story.append(exp_table)
    
    exp_bullets = [
        "Contributed to GenAI application workflows by integrating and working with LLM APIs.",
        "Built automation workflows using N8N to streamline recurring development tasks.",
        "Collaborated with team members to communicate requirements and support GenAI development activities."
    ]
    for b in exp_bullets:
        story.append(Paragraph(f"&bull;&nbsp; {b}", bullet_style))
    story.append(Spacer(1, 10))

    # 5. Projects
    story.append(Paragraph("SELECTED PROJECTS", section_heading))
    
    # Project 1: RepoGuide
    story.append(Paragraph("<b>RepoGuide &mdash; AI-Powered Codebase Q&A</b> &nbsp;&nbsp;<font size=8 color='#0D9488'>(github.com/UsamaAliK/RepoGuide)</font>", body_style))
    story.append(Paragraph("&bull;&nbsp; Built a tool that analyzes GitHub repositories and provides context-aware answers about their codebase using RAG.", bullet_style))
    story.append(Paragraph("&bull;&nbsp; Implemented repository ingestion, code-aware chunking, embeddings, semantic search, and reranking using Python, FastAPI, ChromaDB, Gemini, Jina AI, and LangChain.", bullet_style))
    story.append(Paragraph("&bull;&nbsp; Implemented PostgreSQL persistence using SQLAlchemy and Alembic migrations for users, repositories, conversations, and messages.", bullet_style))
    story.append(Spacer(1, 6))

    # Project 2: Mindly
    story.append(Paragraph("<b>Mindly &mdash; Knowledge-Based Learning System</b> &nbsp;&nbsp;<font size=8 color='#0D9488'>(mindly.one)</font>", body_style))
    story.append(Paragraph("&bull;&nbsp; Built a knowledge-based AI system using RAG, embeddings, and LLM APIs for context-aware responses.", bullet_style))
    story.append(Paragraph("&bull;&nbsp; Implemented document ingestion and semantic retrieval using Python, Next.js, and pgvector.", bullet_style))
    story.append(Spacer(1, 6))

    # Project 3: Movie Recommendation System
    story.append(Paragraph("<b>Movie Recommendation System</b> &nbsp;&nbsp;<font size=8 color='#0D9488'>(github.com/UsamaAliK/Movie-Recomendation-System)</font>", body_style))
    story.append(Paragraph("&bull;&nbsp; Built a collaborative filtering movie recommendation system using Singular Value Decomposition (SVD).", bullet_style))
    story.append(Paragraph("&bull;&nbsp; Implemented data preprocessing, model training, and recommendation generation using Python, Scikit-learn, and Surprise.", bullet_style))
    story.append(Spacer(1, 10))

    # 6. Education
    story.append(Paragraph("EDUCATION", section_heading))
    edu_header = [
        Paragraph("<b>Bachelor of Science in Computer Science</b>", body_style),
        Paragraph("<font color='#6B7280'>2022 &ndash; 2026</font>", ParagraphStyle('RightText2', parent=body_style, alignment=TA_RIGHT))
    ]
    edu_table = Table([edu_header], colWidths=[380, 160])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(edu_table)
    story.append(Paragraph("University of Management and Technology, Lahore", ParagraphStyle('InstStyle', parent=body_style, textColor=colors.HexColor('#4B5563'))))

    doc.build(story)
    print("PDF generated successfully at", pdf_path)

if __name__ == "__main__":
    build_pdf()

